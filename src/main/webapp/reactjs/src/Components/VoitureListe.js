import React from 'react';
import {Button, ButtonGroup, Card, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MyToast from "./MyToast";
import {Link} from "react-router-dom";

class VoitureListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voitures: [],
            loading: false,
            error: null
        };

        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:9093'
        });
    }

    deleteVoiture = (voitureId) => {
        axios.delete("http://localhost:9093/api/voitures/" + voitureId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId),
                        show: true,  // Show the toast notification
                        message: "Voiture supprimée avec succès." // Message for the toast
                    });
                    setTimeout(() => this.setState({show: false}), 500); // Hide the toast after 3 seconds
                } else {
                    this.setState({show: false}); // In case of error
                }
            })
            .catch(error => {
                this.setState({show: false}); // Handle error
            });
    };


    componentDidMount() {
        this.setState({loading: true});

        this.axiosInstance.get("/voitures")
            .then(response => {
                this.setState({
                    voitures: response.data,
                    loading: false
                });
            })
            .catch(error => {
                let errorMessage = "Erreur lors du chargement des voitures";
                if (error.response) {
                    if (error.response.status === 401) {
                        errorMessage = "Erreur d'authentification - Veuillez vérifier vos credentials";
                    } else if (error.response.status === 403) {
                        errorMessage = "Accès non autorisé";
                    } else {
                        errorMessage = `Erreur serveur: ${error.response.status}`;
                    }
                } else if (error.request) {
                    errorMessage = "Impossible de se connecter au serveur";
                }

                this.setState({
                    error: errorMessage,
                    loading: false
                });
            });
    }

    makeSecureRequest = async (method, endpoint, data = null) => {
        try {
            const response = await this.axiosInstance({
                method,
                url: endpoint,
                data
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    render() {
        const {voitures, loading, error, show, message} = this.state;

        return (
            <div>
                {show && <MyToast children={{show: show, message: message}}/>} {/* Show toast when necessary */}

                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>
                        <FontAwesomeIcon icon={faList}/> Liste Voitures
                        <span className="float-right">
                        Nombre total: {voitures.length}
                    </span>
                    </Card.Header>
                    <Card.Body>
                        {error ? (
                            <div className="text-danger">{error}</div>
                        ) : (
                            <Table bordered hover striped variant="dark">
                                <thead>
                                <tr>
                                    <th>Marque</th>
                                    <th>Modèle</th>
                                    <th>Couleur</th>
                                    <th>Année</th>
                                    <th>Prix</th>
                                </tr>
                                </thead>
                                <tbody>
                                {loading ? (
                                    <tr align="center">
                                        <td colSpan="5">Chargement...</td>
                                    </tr>
                                ) : voitures.length === 0 ? (
                                    <tr align="center">
                                        <td colSpan="5">Aucune Voiture n'est disponible</td>
                                    </tr>
                                ) : (
                                    voitures.map((voiture, index) => (
                                        <tr key={index}>
                                            <td>{voiture.marque}</td>
                                            <td>{voiture.modele}</td>
                                            <td>{voiture.couleur}</td>
                                            <td>{voiture.annee}</td>
                                            <td>{voiture.prix}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={`/edit/${voiture.id}`} className="btn btn-sm btn-outline-primary">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Link>{' '}
                                                    <Button size="sm" variant="outline-danger"
                                                            onClick={() => this.deleteVoiture(voiture.id)}>
                                                        <FontAwesomeIcon icon={faTrash}/>
                                                    </Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </Table>
                        )}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
    export default VoitureListe;