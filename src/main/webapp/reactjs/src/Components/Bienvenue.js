import React from 'react';

import { Jumbotron } from 'react-bootstrap';

class Bienvenue extends React.Component {
    render() {
        const marginTop = { marginTop: "20px" };

        return (
            <Jumbotron>
                <h1>Bienvenue au Magasin des Voitures</h1>
                <blockquote className="blockquote mb-0">
                    <p>Le meilleur de nos voitures est exposé près de chez vous</p>
                    <footer className="blockquote-footer">
                        Master MIOLA
                    </footer>
                </blockquote>
            </Jumbotron>
        );
    }
}

export default Bienvenue;