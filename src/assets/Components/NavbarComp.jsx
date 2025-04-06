import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom';
import './NavbarComp.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarComp({handleSearch}) {
  const {isDarkMode, toggleTheme} = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

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
          <Form className='d-flex justify-content-center align-items-center search-container'>
            <Form.Group controlId="searchTitle" className="position-relative">
              <Form.Control 
                className={`search-input ${isExpanded ? 'expanded' : ''}`}
                type="input" 
                placeholder={isExpanded ? "Search for title..." : ""} 
                onChange={handleSearch}
                onFocus={() => setIsExpanded(true)}
                onBlur={() => setIsExpanded(false)}
              />
              {!isExpanded && (
                <FontAwesomeIcon 
                  icon={faMagnifyingGlass} 
                  className="search-icon"
                />
              )}
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
