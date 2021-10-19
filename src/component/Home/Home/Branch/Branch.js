import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="bg-primary py-5">
            <Container>
        <h1 style={{fontSize:"4rem"}} className="text-light pb-3 text-center">This is Branches </h1>
        <Row xs={1} md={3} className="g-4">
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
        </div>
    );
};

export default Branch;