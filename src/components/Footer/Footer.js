import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row xs={1} md={3} className="footer-wrapper">
                    <Col className="mb-4 mb-md-0">
                        <img src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/logo-01.png" alt="" />
                        <div className="mt-4 footer-icons">
                            <FaFacebook className="me-3" />
                            <FaLinkedin className="me-3" />
                            <FaInstagramSquare className="me-3" />
                            <FaGithubSquare className="me-3" />
                        </div>
                    </Col>
                    <Col className="useful-links d-flex flex-column mb-4 mb-md-0">
                        <h5 className="text-white">Useful Links</h5>
                        <NavLink to="/contactus">About us</NavLink>
                        <NavLink to="/aboutus">Contact us</NavLink>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </Col>
                    <Col className="subscribe d-flex flex-column">
                        <h3 className="text-white">Subscribe to get news</h3>
                        <input type="text" />
                        <button className="button">subscribe<BiRightArrowAlt /></button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;