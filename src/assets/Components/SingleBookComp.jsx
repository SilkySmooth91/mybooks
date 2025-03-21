import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Modal, } from 'react-bootstrap';
import BookCardComp from './BookCardComp';
import CommentAreaComp from './CommentAreaComp';

export default function SingleBookComp({book, isSelected, onBookSelect}) {

  
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
      onBookSelect(book.asin)
  }

  const handleClose = () => setShowModal(false)  

  return (
    <>
      <Col key={book.asin} md={3} xs={6} className='mb-4'>
        <BookCardComp book={book} onClick={handleClick} selected={isSelected} />
      </Col>
      <Modal show={showModal} onHide={handleClose} size="lg" contentClassName="bg-dark text-white">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Recensioni degli utenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={3}>
              <BookCardComp book={book} />  
            </Col>
            <Col md={9}>
              <CommentAreaComp bookId={book.asin} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}
