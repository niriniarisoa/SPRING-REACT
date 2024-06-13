import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Container, Typography, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import depenseService from '../depense/DepenseService';

const EditDepense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [depense, setDepense] = useState({
    type: '',
    montant: '',
    paye: false,
    date: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    depenseService.getDepense(id).then((response) => {
      setDepense(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'montant' && isNaN(value)) {
      return; // Ne pas mettre à jour si la valeur n'est pas un nombre
    }
    setDepense((prevDepense) => ({ ...prevDepense, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.type = depense.type ? '' : 'Ce champ est requis.';
    tempErrors.montant = depense.montant ? '' : 'Ce champ est requis.';
    tempErrors.date = depense.date ? '' : 'Ce champ est requis.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      depenseService.updateDepense(id, depense).then(() => {
        navigate('/depense');
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Modifier une Dépense
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={depense.type}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.type}
              helperText={errors.type}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Montant"
              name="montant"
              type="text"
              value={depense.montant}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.montant}
              helperText={errors.montant}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={depense.paye}
                  onChange={() => setDepense((prevDepense) => ({ ...prevDepense, paye: !prevDepense.paye }))}
                />
              }
              label="Payé"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={depense.date}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.date}
              helperText={errors.date}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Modifier
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditDepense;
