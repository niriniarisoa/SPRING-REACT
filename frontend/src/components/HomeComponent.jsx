import React, { useEffect, useState } from 'react';
import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import axios from '../axiosConfig';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const HomeComponent = () => {
  const [colocatairesCount, setColocatairesCount] = useState(0);
  const [totalDepenses, setTotalDepenses] = useState(0);
  const [tachesAujourdhuiCount, setTachesAujourdhuiCount] = useState(0);
  const [depensesParMois, setDepensesParMois] = useState([]);

  useEffect(() => {
    const fetchColocatairesCount = async () => {
      try {
        const response = await axios.get('/colocataires');
        setColocatairesCount(response.data.length);
      } catch (error) {
        console.error('Erreur lors de la récupération des colocataires :', error);
      }
    };

    const calculateTotalDepenses = async () => {
      try {
        const response = await axios.get('/depenses');
        const total = response.data.reduce((acc, depense) => acc + depense.montant, 0);
        setTotalDepenses(total);

        // Calculer les dépenses par mois
        const depensesParMois = Array(12).fill(0); 
        response.data.forEach(depense => {
          const mois = new Date(depense.date).getMonth();
          depensesParMois[mois] += depense.montant;
        });
        setDepensesParMois(depensesParMois);
      } catch (error) {
        console.error('Erreur lors du calcul du total des dépenses :', error);
      }
    };

    const fetchTachesAujourdhuiCount = async () => {
      try {
        const response = await axios.get('/taches', { params: { date: new Date().toISOString().split('T')[0] } });
        setTachesAujourdhuiCount(response.data.length);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches à faire aujourd\'hui :', error);
      }
    };

    fetchColocatairesCount();
    calculateTotalDepenses();
    fetchTachesAujourdhuiCount();
  }, []);

  // Données pour le graphique des dépenses par mois
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dépenses par mois',
        data: depensesParMois,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nombre de colocataires
              </Typography>
              <Typography variant="h4">
                {colocatairesCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total des dépenses
              </Typography>
              <Typography variant="h4">
                {totalDepenses} Ar
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tâches aujourd'hui
              </Typography>
              <Typography variant="h4">
                {tachesAujourdhuiCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dépenses par mois
              </Typography>
              <Bar data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeComponent;
