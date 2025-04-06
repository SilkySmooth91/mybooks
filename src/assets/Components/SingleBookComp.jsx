import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import BookCardComp from './BookCardComp';

export default function SingleBookComp({book, isSelected, onBookSelect}) {
    return (
        <Col key={book.asin} md={3} xs={12} className='mb-4'>
            <BookCardComp 
                book={book} 
                onClick={() => onBookSelect(book.asin)} 
                selected={isSelected}
            />
        </Col>
    )
}
