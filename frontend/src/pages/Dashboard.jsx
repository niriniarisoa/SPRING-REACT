import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppBarComponent from '../layout/AppBar';
import DrawerComponent from '../layout/Drawer';
import MainContent from '../layout/MainContent';

const Dashboard = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBarComponent />
    <DrawerComponent />
    <MainContent />
  </Box>
);

export default Dashboard;
