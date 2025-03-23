import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasyBooks from '../books/fantasy.json';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SingleBookComp from './SingleBookComp';
import BookPlaceholderComp from './BookPlaceholderComp';

export default function AllTheBooksComp() {
  const [visibleBooks, setVisibleBooks] = useState(12)
  const [selectedBookId, setSelectedBookId] = useState(null)
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(fantasyBooks)
  const [loading, setLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const loadMoreBooks = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8);
      setIsLoadingMore(false);
    }, 1000);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search)
    const filteredBooks = fantasyBooks.filter((book) => {
      return book.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setBooks(filteredBooks);
  }

  return (
    <>
      <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className="fw-bold">Libri Fantasy</h2>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
        <Form className='d-flex justify-content-center'>
          <Form.Group className="mb-3" controlId="searchTitle">
            <Form.Control className="comment-form" type="input" placeholder="Search for title..." onChange={handleSearch}/>
          </Form.Group>
        </Form>
      </Row>
        <Row>
          { loading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <BookPlaceholderComp key={index} />
          ))
        ) : (
          books.length === 0 ? (
            <Col className="text-center">
              <p>Nessun libro trovato. Prova con una ricerca diversa.</p>
            </Col>
          ) : (
            books.slice(0, visibleBooks).map((book) => (
              <SingleBookComp 
                key={book.asin} 
                book={book} 
                isSelected={selectedBookId === book.asin}
                onBookSelect={setSelectedBookId}/>
            ))
          )
        )}
        </Row>
        {visibleBooks < fantasyBooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button 
                variant="dark" 
                onClick={loadMoreBooks}
                disabled={isLoadingMore}
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
