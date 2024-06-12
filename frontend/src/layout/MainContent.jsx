import React from 'react';
import { Box, Toolbar, Container ,Typography} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ColocataireList from '../components/colocataire/ColocataireList';
import AddColocataire from '../components/colocataire/AddColocataire';
import EditColocataire from '../components/colocataire/EditColocataire';

const MainContent = () => (
  <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
    <Toolbar />
    <Container>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/colocataires" element={<ColocataireList />} />
        <Route path="/colocataires/add" element={<AddColocataire />} />
        <Route path="/colocataires/edit/:id" element={<EditColocataire />} />
      </Routes>
    </Container>
  </Box>
);

const HomeComponent = () => (
  <Typography variant="h4">Bienvenue dans la gestion de colocation</Typography>
);

export default MainContent;
