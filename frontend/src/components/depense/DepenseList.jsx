import React, { useEffect, useState } from 'react';
import depenseService from '../depense/DepenseService';
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
import { useNavigate } from 'react-router-dom';

const DepenseList = () => {
  const [depenses, setDepenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    depenseService.getAllDepenses().then((response) => {
      setDepenses(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    depenseService.deleteDepense(id).then(() => {
      setDepenses(depenses.filter((depense) => depense.id !== id));
    });
  };

  const handleEdit = (id) => {
    navigate(`/depense/edit/${id}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Liste des Dépenses
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Montant</TableCell>
                <TableCell>Payé</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {depenses.map((depense) => (
                <TableRow key={depense.id}>
                  <TableCell>{depense.type}</TableCell>
                  <TableCell>{depense.montant}</TableCell>
                  <TableCell>{depense.paye ? 'Oui' : 'Non'}</TableCell>
                  <TableCell>{new Date(depense.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(depense.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(depense.id)} color="secondary">
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

export default DepenseList;
