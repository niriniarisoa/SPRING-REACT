import React, { useState, useEffect } from 'react';
import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import axios from '../axiosConfig';

const HomeComponent = () => {
  const [colocatairesCount, setColocatairesCount] = useState(0);

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

    // Appel de la fonction d'initialisation
    fetchColocatairesCount();
  }, []);

  // Valeurs statiques pour les dépenses et les tâches à faire aujourd'hui
  const totalDepenses = 500; // Exemple : 500 euros
  const tachesAujourdhuiCount = 3; // Exemple : 3 tâches

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
                Tâches à faire aujourd'hui
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


// import React, { useEffect, useState } from 'react';
// import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
// import axios from '../../axiosConfig';

// const HomeComponent = () => {
//   const [colocatairesCount, setColocatairesCount] = useState(0);
//   const [totalDepenses, setTotalDepenses] = useState(0);
//   const [tachesAujourdhuiCount, setTachesAujourdhuiCount] = useState(0);

//   useEffect(() => {
//     // Fonction pour récupérer le nombre de colocataires
//     const fetchColocatairesCount = async () => {
//       try {
//         const response = await axios.get('/colocataires');
//         setColocatairesCount(response.data.length);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des colocataires :', error);
//       }
//     };

//     // Fonction pour calculer le total des dépenses
//     const calculateTotalDepenses = async () => {
//       try {
//         // Remplacer par la logique pour récupérer et calculer le total des dépenses
//         // const response = await axios.get('/depenses');
//         // const total = response.data.reduce((acc, depense) => acc + depense.amount, 0);
//         // setTotalDepenses(total);
//       } catch (error) {
//         console.error('Erreur lors du calcul du total des dépenses :', error);
//       }
//     };

//     // Fonction pour récupérer le nombre de tâches à faire aujourd'hui
//     const fetchTachesAujourdhuiCount = async () => {
//       try {
//         // Remplacer par la logique pour récupérer le nombre de tâches à faire aujourd'hui
//         // const response = await axios.get('/taches', { params: { date: new Date().toISOString() } });
//         // setTachesAujourdhuiCount(response.data.length);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des tâches à faire aujourd\'hui :', error);
//       }
//     };

//     // Appel des fonctions d'initialisation
//     fetchColocatairesCount();
//     calculateTotalDepenses();
//     fetchTachesAujourdhuiCount();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Tableau de bord
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Nombre de colocataires
//               </Typography>
//               <Typography variant="h4">
//                 {colocatairesCount}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Total des dépenses
//               </Typography>
//               <Typography variant="h4">
//                 {totalDepenses} €
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Nombre de tâches à faire aujourd'hui
//               </Typography>
//               <Typography variant="h4">
//                 {tachesAujourdhuiCount}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default HomeComponent;
