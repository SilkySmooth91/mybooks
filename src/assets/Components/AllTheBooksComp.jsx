import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasyBooks from '../books/fantasy.json';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SingleBookComp from './SingleBookComp';

export default function AllTheBooksComp() {
  const [visibleBooks, setVisibleBooks] = useState(12);

  const loadMoreBooks = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8);
  };

  const [search, setSearch] = useState('');
  const [books, setBooks] = useState(fantasyBooks);

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
            <Form.Control type="input" placeholder="Search for title..." onChange={handleSearch}/>
          </Form.Group>
        </Form>
      </Row>
        <Row>
          {books.slice(0, visibleBooks).map((book) => (
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
