import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg"> {/* Added expand for responsiveness */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg"
                        width="25"
                        height="25"
                        className="d-inline-block align-top"
                        alt="Car logo"
                    />
                    {' '} {/* Added space for better separation */}
                    Magasin des Voitures {/* Brand text for clarity */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle for mobile view */}
                    <Link className="me-auto">
                        <Link to="/add">Ajouter Voiture</Link>
                        <Link to="/list">Liste Voitures</Link>
                    </Link>
            </Navbar>
        );
    }
}

export default NavigationBar;
