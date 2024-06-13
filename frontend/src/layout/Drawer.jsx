import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from '@mui/material';
import { Home, People, ListAlt, AttachMoney, Add, Assignment } from '@mui/icons-material';
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
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button component={Link} to="/colocataires">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Colocataires" />
        </ListItem>
        <ListItem button component={Link} to="/colocataires/add">
          <ListItemIcon><Add /></ListItemIcon>
          <ListItemText primary="Ajouter Colocataire" />
        </ListItem>
        <ListItem button component={Link} to="/depense">
          <ListItemIcon><AttachMoney /></ListItemIcon>
          <ListItemText primary="Dépenses" />
        </ListItem>
        <ListItem button component={Link} to="/depense/add">
          <ListItemIcon><Add /></ListItemIcon>
          <ListItemText primary="Ajouter Dépense" />
        </ListItem>
        <ListItem button component={Link} to="/tache">
          <ListItemIcon><Assignment /></ListItemIcon>
          <ListItemText primary="Tâches" />
        </ListItem>
        <ListItem button component={Link} to="/tache/add">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Ajouter Tâche" />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

export default DrawerComponent;
