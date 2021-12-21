import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row xs={1} lg={3} className="footer-wrapper justify-content-space-between">
                    <Col div className="mb-4 mb-md-0 footer-icon-logo flex-grow-1 flex-grow-lg-0">
                        <img src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/logo-01.png" alt="" />
                        <div className="mt-4 footer-icons d-flex flex-row">
                            <a href="https://www.facebook.com/mdshihab.shumon.3" target="_blank" rel="noreferrer"><FaFacebook className="me-3" /></a>

                            <a href="https://www.linkedin.com/in/shihab-shihab-5a8202216/" target="_blank" rel="noreferrer"><FaLinkedin className="me-3" /></a>

                            <a href="https://www.instagram.com/shihabshumon9/" target="_blank" rel="noreferrer"><FaInstagramSquare className="me-3" /></a>

                            <a href="https://github.com/shihab91/" target="_blank" rel="noreferrer"><FaGithubSquare className="me-3" /></a>
                        </div>
                    </Col>
                    <Col className="useful-links d-flex flex-column mb-4 mb-md-0">
                        <h5 className="text-white mt-4 mt-lg-0">Useful Links</h5>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/contact">Contact us</NavLink>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </Col>
                    <Col className="subscribe d-flex flex-column">
                        <h3 className="text-white mv-2">Subscribe to get news</h3>
                        <input type="text" placeholder="Enter your email address" />
                        <button className="button fs-5 mt-3 ">subscribe<BiRightArrowAlt className="ms-2 fs-3" /></button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;