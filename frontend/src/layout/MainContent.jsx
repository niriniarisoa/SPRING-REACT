import React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ColocataireList from '../components/colocataire/ColocataireList';
import AddColocataire from '../components/colocataire/AddColocataire';
import EditColocataire from '../components/colocataire/EditColocataire';
import HomeComponent from '../components/HomeComponent';
import DepenseList from '../components/depense/DepenseList';
import AddDepense from '../components/depense/AddDepense';
import EditDepense from '../components/depense/EditDepense';
import TacheListe from '../components/tache/TacheListe';
import AddTache from '../components/tache/AddTache';
import EditTache from '../components/tache/EditTache';
import './MainContent.css'; 

const MainContent = () => (
  <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
    <Toolbar />
    <Container>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/colocataires" element={<ColocataireList />} />
        <Route path="/colocataires/add" element={<AddColocataire />} />
        <Route path="/colocataires/edit/:id" element={<EditColocataire />} />
        <Route path="/depense" element={<DepenseList />} />
        <Route path="/depense/add" element={<AddDepense />} />
        <Route path="/depense/edit/:id" element={<EditDepense />} />
        <Route path="/tache" element={<TacheListe />} />
        <Route path="/tache/add" element={<AddTache />} />
        <Route path="/tache/edit/:id" element={<EditTache />} />
      </Routes>
    </Container>
  </Box>
);

export default MainContent;
