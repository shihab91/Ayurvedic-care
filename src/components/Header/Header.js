import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/logo-01.png"
                                alt=""
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-wrapper">
                        <Nav className="navbar">

                            <NavLink
                                to="/home"
                                activeStyle={{ textDecoration: "underline" }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{ textDecoration: "underline" }}
                            >
                                About us
                            </NavLink>
                            <NavLink
                                to="/contact"
                                activeStyle={{ textDecoration: "underline" }}
                            >
                                Contact us
                            </NavLink>
                            {user.displayName ? (
                                <div className="d-flex  flex-column flex-lg-row justify-content-center align-items-center ">
                                    <h5 className="me-lg-3 mb-3 mb-lg-0">{user.displayName}</h5>
                                    <button className="login-button button fs-5" onClick={logOut}>
                                        sign Out <FaSignOutAlt />
                                    </button>
                                </div>
                            ) : (
                                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                                    <NavLink to="/login">
                                        <button className="login-button button ">
                                            Login <MdLogin />
                                        </button>
                                    </NavLink>
                                    <NavLink to="/register">
                                        <button className="register-button button ms-lg-4 mt-3 mt-lg-0">
                                            Register
                                            <MdLogin />{" "}
                                        </button>
                                    </NavLink>
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
