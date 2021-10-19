import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Aspects.css'
const Aspects = () => {
    const [aspects, setAspects] = useState([]);
    useEffect(() => {
        fetch("./aspects.json")
            .then(res => res.json())
            .then(data => setAspects(data))
    }, [])
    return (
        <div className="aspects text-center py-5 bg-white">
            <Container>
                <div className="aspects-text d-flex align-items-center flex-column">
                    <p className="green-text">Working Process</p>
                    <h2 className="fs-1">We Provide All Aspects <br /> Of Medical Practice</h2>
                    <div className="mt-3"></div>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
                    {
                        aspects.map(aspect => <Col key={aspect.key}>
                            <Card className="aspect-card d-flex flex-column justify-content-center align-items-center">
                                <Card.Img variant="top" src={aspect.icon} />
                                <Card.Body>
                                    <Card.Title>{aspect.name}</Card.Title>
                                    <Card.Text className="info">
                                        {aspect.info}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        )
                    }

                </Row>
                <p className="mt-4 contact-us-text">If you have difficulty understanding our work process. <span className="green-text">Please contact us for better information.</span></p>
            </Container>
        </div>
    );
};

export default Aspects;








/*


 */

