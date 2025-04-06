import React, {useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import RightColumnComp from './RightColumnComp'
import LeftColumnComp from './LeftColumnComp'

export default function MainLayoutComp({books}) {
    const [selectedBook, setSelectedBook] = useState(null)

    const handleBookSelect = (bookId) => {
        const book = books.find(b => b.asin === bookId)
        setSelectedBook(book)
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={6} md={9}>
                    <LeftColumnComp 
                        books={books} 
                        selectedBookId={selectedBook?.asin}
                        setSelectedBookId={handleBookSelect}
                    />
                </Col>
                <Col xs={6} md={3} className="bg-dark border-start border-2 border-light right-column">
                    <RightColumnComp 
                        selectedBook={selectedBook}
                        bookId={selectedBook?.asin}
                    />
                </Col>
            </Row>
        </Container>
    )
}
