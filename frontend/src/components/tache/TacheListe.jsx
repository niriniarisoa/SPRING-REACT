import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import tacheService from '../tache/TacheService';

const TacheList = () => {
  const [taches, setTaches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    tacheService.getAllTaches().then((response) => {
      setTaches(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    tacheService.deleteTache(id).then(() => {
      setTaches(taches.filter((tache) => tache.id !== id));
    });
  };

  const handleEdit = (id) => {
    navigate(`/tache/edit/${id}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Liste des Tâches
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Fait</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {taches.map((tache) => (
                <TableRow key={tache.id}>
                  <TableCell>{tache.description}</TableCell>
                  <TableCell>{new Date(tache.date).toLocaleDateString()}</TableCell>
                  <TableCell>{tache.fait ? 'Oui' : 'Non'}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(tache.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(tache.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TacheList;
