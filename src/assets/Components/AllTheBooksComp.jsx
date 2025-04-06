import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasyBooks from '../books/fantasy.json';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SingleBookComp from './SingleBookComp';
import BookPlaceholderComp from './BookPlaceholderComp';

export default function AllTheBooksComp({ books, selectedBookId, setSelectedBookId }) {
  const [visibleBooks, setVisibleBooks] = useState(12);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const shouldShowPlaceholders = visibleBooks < books.length;
  const placeholderCount = shouldShowPlaceholders ? visibleBooks - books.slice(0, visibleBooks).length : 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const loadMoreBooks = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 8);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className="fw-bold">Libri Fantasy</h2>
          </Col>
        </Row>
        <Row className="mt-4 mb-4"></Row>
        <Row>
          {loading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <BookPlaceholderComp key={`placeholder-${index}`} />
            ))
          ) : books.length === 0 ? (
            <Col className="text-center">
              <p>Nessun libro trovato. Prova con una ricerca diversa.</p>
            </Col>
          ) : (
            books.slice(0, visibleBooks).map((book) => (
              <SingleBookComp
                key={book.asin}
                book={book}
                isSelected={selectedBookId === book.asin}
                onBookSelect={setSelectedBookId}
              />
            ))
          )}
          {shouldShowPlaceholders &&
            [...Array(placeholderCount)].map((_, index) => (
              <BookPlaceholderComp key={`placeholder-${index}`} />
            ))}
        </Row>
        {books.length > visibleBooks && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button
                variant="dark"
                onClick={loadMoreBooks}
                disabled={isLoadingMore}
                aria-label="Carica altri"
              >
                {isLoadingMore ? 'Caricamento...' : 'Carica altri'}
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
