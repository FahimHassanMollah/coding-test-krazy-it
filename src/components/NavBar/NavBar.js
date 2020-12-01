import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import brand from '../../images/logo.png';
const NavBar = () => {
    return (
        <div className="pt-2">
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="" style={{height:"60px"}}  src={brand} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="pr-4 nav_link" href="#home">Home</Nav.Link>
                            <Nav.Link className="pr-4 nav_link" href="#link">About</Nav.Link>
                            <Nav.Link className="pr-4 nav_link" href="#link">Services</Nav.Link>
                            <Nav.Link className="pr-4 nav_link" href="#link">Protfolio</Nav.Link>
                            <Nav.Link className="pr-4 nav_link" href="#link">Pricing</Nav.Link>
                            <Nav.Link className="pr-4 nav_link" href="#link">Order Now</Nav.Link>
                            

                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;