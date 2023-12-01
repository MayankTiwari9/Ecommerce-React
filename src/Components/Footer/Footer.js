import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import youtube from "../../Images/icons8-youtube.svg";
import spotify from "../../Images/icons8-spotify.svg";
import facebook from "../../Images/icons8-facebook.svg";

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
          <Navbar.Brand href="#home">
            <img
              src={youtube}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={spotify}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={facebook}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
