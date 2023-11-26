import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      className="d-flex justify-content-around"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="active" href="#home">
            Youtube
          </Nav.Link>
          <Nav.Link className="active" href="#features">
            Spotify
          </Nav.Link>
          <Nav.Link className="active" href="#pricing">
            Facebook
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
