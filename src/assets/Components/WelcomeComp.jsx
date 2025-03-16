import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function WelcomeComp() {
  return (
    <Container fluid className="py-5 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="text-center">
          <h1 className="display-4 mb-5">Welcome to MyBooks!</h1>
          <p className="lead">
            Benvenuti nella nostra libreria. Scopri tutti i titoli che abbiamo in serbo per te!
          </p>
        </Col>
      </Row>
    </Container>
  );
}



