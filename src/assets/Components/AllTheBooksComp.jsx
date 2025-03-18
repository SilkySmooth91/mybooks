import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasyBooks from '../books/fantasy.json';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SingleBookComp from './SingleBookComp';

export default function AllTheBooksComp() {
  const [visibleBooks, setVisibleBooks] = useState(12);

  const loadMoreBooks = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8);
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className="fw-bold">Libri Fantasy</h2>
          </Col>
        </Row>
        <Row>
          {fantasyBooks.slice(0, visibleBooks).map((book) => (
            <SingleBookComp key={book.asin} book={book} />
          ))}
        </Row>
        {visibleBooks < fantasyBooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="dark" onClick={loadMoreBooks}>Carica altri</Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
