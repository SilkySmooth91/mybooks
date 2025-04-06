import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom';
import './NavbarComp.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarComp({handleSearch}) {
  const {isDarkMode, toggleTheme} = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Navbar 
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
      className="py-2">
      <Container className='align-items-center justify-content-between'>
        <Navbar.Brand href="#home" className="me-2">
          <Image 
            src='src/assets/IMGS/book-logo.png' 
            alt='logo' 
            height={50} 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Hamburger menu for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-3">
            <Nav.Link as={Link} to="/" className="px-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/notfound" className="px-2">About</Nav.Link>
            <Nav.Link as={Link} to="/notfound" className="px-2">Browse</Nav.Link>
            <Nav.Link as={Link} to="/notfound" className="px-2">Fantasy</Nav.Link>
            <Nav.Link as={Link} to="/notfound" className="px-2">Sci-Fi</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center gap-3">
          <Form className='search-container'>
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
            onClick={toggleTheme}
            className="ms-2">
            {isDarkMode ? '☀️' : '🌙'}
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}
