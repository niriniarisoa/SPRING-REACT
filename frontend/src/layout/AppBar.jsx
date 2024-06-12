import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppBarComponent = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Gestion de Colocation
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
