import React, { useState } from 'react';
import axios from '../../axiosConfig';
import { Container, Typography, TextField, Button } from '@mui/material';

const AddColocataire = ({ onAdd }) => {
    const [colocataire, setColocataire] = useState({
        nom: '',
        prenom: '',
        email: '',
        motDePasse: '',
        dateDeNaissance: '',
        telephone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setColocataire({ ...colocataire, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/colocataires', colocataire)
            .then(response => {
                onAdd(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Ajouter un Colocataire
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nom"
                    name="nom"
                    value={colocataire.nom}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Prénom"
                    name="prenom"
                    value={colocataire.prenom}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    value={colocataire.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Mot de Passe"
                    name="motDePasse"
                    type="password"
                    value={colocataire.motDePasse}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Date de Naissance"
                    name="dateDeNaissance"
                    type="date"
                    value={colocataire.dateDeNaissance}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <TextField
                    label="Téléphone"
                    name="telephone"
                    value={colocataire.telephone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Ajouter
                </Button>
            </form>
        </Container>
    );
};

export default AddColocataire;
