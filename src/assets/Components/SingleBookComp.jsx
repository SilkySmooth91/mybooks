import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, } from 'react-bootstrap';

export default function SingleBookComp({book}) {

  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected)
  }

  let imgClass = 'book-cover'
  if (selected) {
    imgClass += ' selected'
  }
  

  return (
    <Col key={book.asin} md={3} xs={6}>
      <Card className="mb-4">
        <Card.Img variant="top" src={book.img} onClick={handleClick} className={imgClass}/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
