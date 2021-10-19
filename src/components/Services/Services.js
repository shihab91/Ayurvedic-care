import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FiChevronsRight } from "react-icons/fi";
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';
import './Services.css'
const Services = () => {
    const { services } = useServices();
    const history = useHistory();
    const handleHistory = name => {
        history.push(`/service/${name}`);
    }
    return (
        <div className="services text-center  ">
            <div className="services-text-wrapper">
                <Container>
                    <div className="d-flex services-text align-items-center flex-column">
                        <p className="text-white">What We Do</p>
                        <h2 className="fs-1 text-white">We Offer Different Services To <br /> Improve Your Health</h2>
                        <div className="mt-3 underline"></div>
                    </div>
                </Container>
            </div>
            <div className="service-cards mx-auto">
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                        {
                            services?.map((service) => <Col key={service.id}>
                                <Card className="service-card d-flex flex-column justify-content-center align-items-start text-start">
                                    <Card.Img variant="top" src={service.icon} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text className="info">
                                            {service.description.slice(0, 110) + '...'}
                                        </Card.Text>
                                    </Card.Body>
                                    <button className="button" onClick={() => { handleHistory(service.name) }}>See more <FiChevronsRight /></button>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
                    <p className="mt-4 contact-us-text mb-0">Join Our conference & events know more us also be careful myself <span className="green-text">Join us here</span></p>
                </Container>
            </div>
        </div>
    );
};

export default Services;