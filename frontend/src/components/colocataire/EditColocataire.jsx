import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const EditColocataire = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState('');
    const [telephone, setTelephone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

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

        // Validation
        if (!nom || !prenom || !email || !motDePasse || !dateDeNaissance || !telephone) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        if (/\d/.test(nom)) {
            setError('Le nom ne peut pas contenir de chiffres.');
            return;
        }

        if (/\d/.test(prenom)) {
            setError('Le prénom ne peut pas contenir de chiffres.');
            return;
        }

        if (!/^\d{10}$/.test(telephone)) {
            setError('Le téléphone doit contenir exactement 10 chiffres.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('L\'adresse email est invalide.');
            return;
        }

        const updatedColocataire = { nom, prenom, email, motDePasse, dateDeNaissance, telephone };

        axios.put(`/colocataires/${id}`, updatedColocataire)
            .then(response => {
                navigate('/colocataires');
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
                setError('Il y a eu une erreur lors de la modification du colocataire.');
            });
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Modifier un Colocataire
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
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
