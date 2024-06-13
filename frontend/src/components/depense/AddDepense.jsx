import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import depenseService from '../depense/DepenseService';

const AddDepense = () => {
  const [type, setType] = useState('');
  const [montant, setMontant] = useState('');
  const [paye, setPaye] = useState(false);
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!type) tempErrors.type = "Type is required";
    if (!montant) tempErrors.montant = "Montant is required";
    else if (isNaN(montant)) tempErrors.montant = "Montant must be a number";
    if (!date) tempErrors.date = "Date is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newDepense = { type, montant: parseFloat(montant), paye, date };
    depenseService.createDepense(newDepense).then(() => {
      navigate('/depense');
    });
  };

  const handleMontantChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setMontant(value);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ajouter une Dépense
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              variant="outlined"
              error={!!errors.type}
              helperText={errors.type}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Montant"
              type="text"
              value={montant}
              onChange={handleMontantChange}
              variant="outlined"
              error={!!errors.montant}
              helperText={errors.montant}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={<Checkbox checked={paye} onChange={(e) => setPaye(e.target.checked)} />}
              label="Payé"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.date}
              helperText={errors.date}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ajouter
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddDepense;
