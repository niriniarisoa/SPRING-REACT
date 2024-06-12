import React, { useState } from 'react';
import axios from '../../axiosConfig';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddColocataire = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState('');
    const [telephone, setTelephone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newColocataire = { nom, prenom, email, motDePasse, dateDeNaissance, telephone };
        axios.post('/colocataires', newColocataire)
            .then(response => {
                navigate('/colocataires');
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
                    variant="outlined"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Prénom"
                    variant="outlined"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mot de passe"
                    type="password"
                    variant="outlined"
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date de Naissance"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    value={dateDeNaissance}
                    onChange={(e) => setDateDeNaissance(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Téléphone"
                    variant="outlined"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Ajouter
                </Button>
            </form>
        </Container>
    );
};

export default AddColocataire;
