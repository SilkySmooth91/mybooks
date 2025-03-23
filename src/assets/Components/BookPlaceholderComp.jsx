import React from 'react';
import { Col, Card, Placeholder } from 'react-bootstrap';

export default function BookPlaceholderComp() {
  return (
    <Col md={3} xs={6} className="mb-4">
      <Card className="placeholder-card book-card">
        <div className="placeholder-img bg-secondary" /> 
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={8} bg="secondary" />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={6} bg="secondary" />
            </Placeholder>
          </div>
          <Placeholder.Button variant="secondary" xs={6} />
        </Card.Body>
      </Card>
    </Col>
  );
}