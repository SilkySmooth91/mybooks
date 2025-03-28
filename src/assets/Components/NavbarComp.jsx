import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext'



export default function NavbarComp({handleSearch}) {
  const {isDarkMode, toggleTheme} = useTheme()

  return (
    <>
      <Navbar 
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"}>
        <Container className='align-items-center'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <Nav.Link href="#">Fantasy</Nav.Link>
            <Nav.Link href="#">Sci-Fi</Nav.Link>
            <Nav.Link href="#">Thriller</Nav.Link>
            <Nav.Link href="#">Crime</Nav.Link>
            <Nav.Link href="#">Horror</Nav.Link>
            <Nav.Link href="#">Romance</Nav.Link>
          </Nav>
          <Form className='d-flex justify-content-center align-items-center'>
          <Form.Group controlId="searchTitle">
            <Form.Control className="comment-form" type="input" placeholder="Search for title..." onChange={handleSearch}/>
          </Form.Group>
        </Form>
        </Container>
        <Button 
          variant={isDarkMode ? "light" : "dark"}
          onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </Button>
      </Navbar>
    </>
  )
}
