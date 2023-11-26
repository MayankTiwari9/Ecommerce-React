import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">STORE</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#cart">Cart (0)</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
