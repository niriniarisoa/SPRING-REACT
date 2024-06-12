import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const ColocataireList = () => {
    const [colocataires, setColocataires] = useState([]);

    useEffect(() => {
        axios.get('/colocataires')
            .then(response => {
                setColocataires(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur!", error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des Colocataires</h1>
            <ul>
                {colocataires.map(colocataire => (
                    <li key={colocataire.id}>
                        {colocataire.nom} {colocataire.prenom} - {colocataire.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColocataireList;
