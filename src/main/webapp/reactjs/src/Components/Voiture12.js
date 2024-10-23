import React, { Component } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import MyToast from "./MyToast";

export default class Voiture12 extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }

    initialState = {
        marque: '',
        modele: '',
        couleur: '',
        immatricule: '',
        annee: '',
        prix: ''
    }

    resetVoiture = () => {
        this.setState(() => this.initialState);
    }

    voitureChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitVoiture(event) {
        event.preventDefault();
        console.log("Données de la voiture soumise:", this.state);
        const voiture = {
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            immatricule: this.state.immatricule,
            annee: this.state.annee,
            prix: this.state.prix
        };

        axios.post("http://localhost:9093/api/voitures", voiture)
            .then(response => {
                if (response.data != null) {
                    this.setState(this.initialState);
                    alert("Voiture enregistrée avec succès");
                }
            })
            .catch(error => {
                console.error("Erreur lors de l'enregistrement :", error);
                alert("Erreur lors de l'enregistrement de la voiture");
            });


    }

    render() {
        return (


                        < Card className = "border border-dark bg-dark text-white" >
                    < Card.Header >
                    < FontAwesomeIcon icon = {faPlusSquare}/> Ajouter une Voiture
                    </Card.Header>
                    <Form onReset={this.resetVoiture} onSubmit={this.submitVoiture} id="VoitureFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label>Marque</Form.Label>
                                <Form.Control
                                    required
                                    name="marque"
                                    type="text"
                                    value={this.state.marque}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Marque Voiture"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label>Modele</Form.Label>
                                <Form.Control
                                    required
                                    name="modele"
                                    type="text"
                                    value={this.state.modele}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Modele Voiture"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCouleur">
                                <Form.Label>Couleur</Form.Label>
                                <Form.Control
                                    required
                                    name="couleur"
                                    type="text"
                                    value={this.state.couleur}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Couleur Voiture"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridImmatricule">
                                <Form.Label>Immatricule</Form.Label>
                                <Form.Control
                                    required
                                    name="immatricule"
                                    type="text"
                                    value={this.state.immatricule}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Immatricule Voiture"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAnnee">
                                <Form.Label>Année</Form.Label>
                                <Form.Control
                                    required
                                    name="annee"
                                    type="text"
                                    value={this.state.annee}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Année Voiture"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrix">
                                <Form.Label>Prix</Form.Label>
                                <Form.Control
                                    required
                                    name="prix"
                                    type="text"
                                    value={this.state.prix}
                                    autoComplete="off"
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez Prix Voiture"
                                />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign": "right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/> Submit
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>

        );
    }
    }