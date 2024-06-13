import React, { useEffect, useState } from 'react';
import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import axios from '../axiosConfig';

const HomeComponent = () => {
  const [colocatairesCount, setColocatairesCount] = useState(0);
  const [totalDepenses, setTotalDepenses] = useState(0);
  const [tachesAujourdhuiCount, setTachesAujourdhuiCount] = useState(0);

  useEffect(() => {
    // Fonction pour récupérer le nombre de colocataires
    const fetchColocatairesCount = async () => {
      try {
        const response = await axios.get('/colocataires');
        setColocatairesCount(response.data.length);
      } catch (error) {
        console.error('Erreur lors de la récupération des colocataires :', error);
      }
    };

    // Fonction pour calculer le total des dépenses
    const calculateTotalDepenses = async () => {
      try {
        const response = await axios.get('/depenses');
        console.log('Data from /depenses:', response.data); // Vérifiez les données reçues depuis l'API
        const total = response.data.reduce((acc, depense) => acc + depense.montant, 0);
        console.log('Total calculated:', total); // Vérifiez le total calculé
        setTotalDepenses(total);
      } catch (error) {
        console.error('Erreur lors du calcul du total des dépenses :', error);
      }
    };

    // Fonction pour récupérer le nombre de tâches à faire aujourd'hui
    const fetchTachesAujourdhuiCount = async () => {
      try {
        // Remplacer par la logique pour récupérer le nombre de tâches à faire aujourd'hui
        const response = await axios.get('/taches', { params: { date: new Date().toISOString().split('T')[0] } });
        setTachesAujourdhuiCount(response.data.length);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches à faire aujourd\'hui :', error);
      }
    };

    // Appel des fonctions d'initialisation
    fetchColocatairesCount();
    calculateTotalDepenses();
    fetchTachesAujourdhuiCount();
  }, []);

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
      </Grid>
    </Container>
  );
};

export default HomeComponent;
