import React from 'react';
import { Card } from 'react-bootstrap';

export default function BookCardComp({ book, onClick, selected }) {
  console.log('Selected:', selected) // debug
  return (
    <Card 
      onClick={onClick}
      className={`book-card ${selected ? 'selected' : ''}`}
    >
      <Card.Img variant="top" src={book.img} className="book-cover" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>€ {book.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}