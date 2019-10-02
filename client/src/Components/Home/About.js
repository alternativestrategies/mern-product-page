import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about pt-4 pb-4">
            <Row>
                <Col>
                <h2 className="about-head">About Us</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="mx-auto">
                <p>Arely's Stationary Box is about filling your life with the tools to be a reflective & thoughtful individual. We curate boxes full of tools to help you become your best self. We strive to find products to improve your life and fill it with joy.</p>
                </Col>
            </Row>
        </Container>
    );
}
export default About;