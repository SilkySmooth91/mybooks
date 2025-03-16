import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export default function FooterComp() {
  return (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <div className="container">
                <p>&copy; 2025 MyBooks. All rights reserved.</p>
            </div>
        </Container>
    </footer>
  )
}
