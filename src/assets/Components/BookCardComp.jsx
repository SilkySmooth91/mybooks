import React from 'react';
import { Card } from 'react-bootstrap';

export default function BookCardComp({ book, onClick, selected }) {
    let imgClass = 'book-cover'
    if (selected) {
      imgClass += ' selected'
    }

  return (
    <Card className="bg-dark text-white h-100 book-card">
      <Card.Img variant="top" src={book.img} onClick={onClick} className={imgClass} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}