import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import brand from '../../images/logo.png';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  import { HashLink as Link } from 'react-router-hash-link';
const NavBar = () => {
    return (
        <div className="pt-2">
            <Navbar fixed="top" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img className="" style={{height:"50px"}}  src={brand} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="pr-4 nav_link" smooth to="#home">Home</Link>
                            <Link className="pr-4 nav_link" smooth to="#about">About</Link>
                            <Link className="pr-4 nav_link" smooth to="#service">Services</Link>
                            <Link className="pr-4 nav_link" smooth to="#protfolio">Protfolio</Link>
                            <Link className="pr-4 nav_link" smooth to="#pricing">Pricing</Link>
                            <Link className="pr-4 nav_link" smooth to="#ordernow">Order Now</Link>
                            

                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;