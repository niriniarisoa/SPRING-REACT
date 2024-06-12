import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Container, Typography, TextField, Button } from '@mui/material';

const EditColocataire = ({ id, onEdit }) => {
    const [colocataire, setColocataire] = useState({
        nom: '',
        prenom: '',
        email: '',
        motDePasse: '',
        dateDeNaissance: '',
        telephone: '',
    });

    useEffect(() => {
        axios.get(`/colocataires/${id}`)
            .then(response => {
                setColocataire(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setColocataire({ ...colocataire, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/colocataires/${id}`, colocataire)
            .then(response => {
                onEdit(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Modifier le Colocataire
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
                    Enregistrer
                </Button>
            </form>
        </Container>
    );
};

export default EditColocataire;
