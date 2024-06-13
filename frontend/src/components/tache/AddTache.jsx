import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import tacheService from '../tache/TacheService';

const AddTache = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [fait, setFait] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tacheService.createTache({ description, date, fait });
      navigate('/tache');
    } catch (error) {
      console.error('Erreur lors de la création de la tâche :', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Ajouter une Tâche
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            type="date"
            label="Date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={fait}
                onChange={(e) => setFait(e.target.checked)}
                name="fait"
                color="primary"
              />
            }
            label="Fait"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
            Ajouter
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddTache;
