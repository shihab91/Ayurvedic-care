import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
// import { CgLogIn } from "react-icons/Cg";

import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/logo-01.png" alt="" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-wrapper">
                        <Nav className="navbar">
                            <NavLink to="/about us" activeStyle={{ textDecoration: "underline" }}>About us </NavLink>
                            <NavLink to="/contact us" activeStyle={{ textDecoration: "underline" }}>Contact us</NavLink>
                            <NavLink to="/login">
                                <button className="login-button button">Login <MdLogin /></button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="register-button button">Register<MdLogin /> </button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;