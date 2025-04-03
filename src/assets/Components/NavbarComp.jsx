import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom';



export default function NavbarComp({handleSearch}) {
  const {isDarkMode, toggleTheme} = useTheme()

  return (
    <>
      <Navbar 
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"}>
        <Container className='align-items-center'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/notfound">About</Nav.Link>
            <Nav.Link as={Link} to="/notfound">Browse</Nav.Link>
            <Nav.Link as={Link} to="/notfound">Fantasy</Nav.Link>
            <Nav.Link as={Link} to="/notfound">Sci-Fi</Nav.Link>
          </Nav>
          <Form className='d-flex justify-content-center align-items-center'>
          <Form.Group controlId="searchTitle">
            <Form.Control className="comment-form" type="input" placeholder="Search for title..." onChange={handleSearch}/>
          </Form.Group>
        </Form>
        <Button 
          variant={isDarkMode ? "light" : "dark"}
          onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </Button>
        </Container>
      </Navbar>
    </>
  )
}
