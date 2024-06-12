import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Container, Typography, Grid, Card, CardContent, CardHeader, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const ColocataireList = () => {
    const [colocataires, setColocataires] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        axios.get('/colocataires')
            .then(response => {
                setColocataires(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredColocataires = colocataires.filter(colocataire => {
        return `${colocataire.nom} ${colocataire.prenom}`.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleDelete = (id) => {
        axios.delete(`/colocataires/${id}`)
            .then(() => {
                setColocataires(colocataires.filter(colocataire => colocataire.id !== id));
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    };
    

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Liste des Colocataires
                <Button 
                    variant="contained" 
                    color="primary" 
                    component={Link} 
                    to="/colocataires/add"
                    style={{ marginLeft: '20px' }}
                >
                    Ajouter
                </Button>
            </Typography>
            <TextField
                label="Rechercher"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
                fullWidth
                margin="normal"
            />
            <Grid container spacing={3}>
                {filteredColocataires.map(colocataire => (
                    <Grid item xs={12} sm={6} md={4} key={colocataire.id}>
                        <Card>
                            <CardHeader
                                title={`${colocataire.nom} ${colocataire.prenom}`}
                                subheader={colocataire.email}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Téléphone: {colocataire.telephone}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Date de Naissance: {new Date(colocataire.dateDeNaissance).toLocaleDateString()}
                                </Typography>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to={`/colocataires/edit/${colocataire.id}`}
                                >
                                    Modifier
                                </Button>
                                <Button variant="outlined" onClick={() => handleDelete(colocataire.id)}>Supprimer</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default ColocataireList;
