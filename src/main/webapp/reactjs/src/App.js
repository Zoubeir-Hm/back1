import React, { Component } from 'react'; // Import Component
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter and Routes
import Bienvenue from "./Components/Bienvenue";
import Voiture12 from "./Components/Voiture12"; // Import your Voiture component
import VoitureListe from "./Components/VoitureListe"; // Import your VoitureListe component
import Footer from "./Components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        // Initialize state with empty values
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: ''
        };
    }

    // Method to handle form submission
    submitVoiture(event) {
        alert(this.state.marque); // Alert the 'marque' value
        event.preventDefault(); // Prevent default form submission behavior
    }

    render() {
        const marginTop = { marginTop: "20px" };

        return (
            <div>
                <NavigationBar />
                <Container className="mt-4">
                    <div className="bg-light p-5 rounded-3">
                        <Container>
                            <Row>
                                <Col lg={12} style={marginTop}>
                                    <Routes>
                                        <Route path="/" element={<Bienvenue />} />
                                        <Route path="/add" element={<Voiture12 />} />
                                        <Route path="/edit/:id" element={<Voiture12 />}/>
                                        <Route path="/list" element={<VoitureListe />} />
                                    </Routes>
                                    <Footer />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;
