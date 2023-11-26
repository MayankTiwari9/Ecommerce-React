import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Youtube</Nav.Link>
            <Nav.Link href="#features">Spotify</Nav.Link>
            <Nav.Link href="#pricing">Facebook</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer
