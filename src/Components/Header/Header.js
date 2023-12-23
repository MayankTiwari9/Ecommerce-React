import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const onCartOpenHandler = () => {
    props.setOpenCart(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/auth")
  }

  return (
    <div>
      <Navbar
        expand="lg"
        className="position-fixed w-100 mt-0 p-0"
        bg="black"
        style={{ zIndex: 100 }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                HOME
              </Nav.Link>
              <Nav.Link href="/" className="active">
                STORE
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="active">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="active">
                CONTACT US
              </Nav.Link>
              <Nav.Link as={Link} to="/auth" className="active">
                LOG IN
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className="active">
                SIGN UP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <button
              onClick={logoutHandler}
              className="btn btn-danger m-2"
            >
              Logout
            </button>
            <button
              onClick={onCartOpenHandler}
              className="border border-2 border-primary"
            >
              Cart {props.cartCount}
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="d-flex justify-content-center bg-secondary mx-auto w-100"
        style={{ height: "40vh" }}
      >
        <h1 className="display-2 fw-bold d-flex align-items-center text-white">
          The Generics
        </h1>
      </div>
    </div>
  );
};

export default Header;
