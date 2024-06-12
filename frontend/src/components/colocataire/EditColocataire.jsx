import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const EditColocataire = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState('');
    const [telephone, setTelephone] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/colocataires/${id}`)
            .then(response => {
                const colocataire = response.data;
                setNom(colocataire.nom);
                setPrenom(colocataire.prenom);
                setEmail(colocataire.email);
                setMotDePasse(colocataire.motDePasse);
                setDateDeNaissance(colocataire.dateDeNaissance);
                setTelephone(colocataire.telephone);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedColocataire = { nom, prenom, email, motDePasse, dateDeNaissance, telephone };
        axios.put(`/colocataires/${id}`, updatedColocataire)
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
                Modifier le Colocataire
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
                    Modifier
                </Button>
            </form>
        </Container>
    );
};

export default EditColocataire;
