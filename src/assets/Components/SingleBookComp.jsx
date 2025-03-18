import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, } from 'react-bootstrap';

export default function SingleBookComp({book}) {

  const [selected, setSelected] = useState(false);
  

  return (
    <Col key={book.asin} md={3} xs={6}>
      <Card className="mb-4">
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
