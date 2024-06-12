import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from '@mui/material';
import { Home, People, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const DrawerComponent = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem  component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem  component={Link} to="/colocataires">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Colocataires" />
        </ListItem>
        <ListItem  component={Link} to="colocataires/add">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Ajouter Colocataire" />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

export default DrawerComponent;
