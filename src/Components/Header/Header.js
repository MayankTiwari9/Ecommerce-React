import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@gmail.com", "");
  const [cartItems, setCartItems] = useState('');


  const onCartOpenHandler = () => {
    props.setOpenCart(true);
  }

  useEffect( async() => {
    try {
      const res = await fetch(
        `https://crudcrud.com/api/8411ebd42c694da885708d8522a64e8c/${updatedEmail}`
      );
      const data = await res.json();
      setCartItems(data.length)
    } catch (err) {
      console.log(err.message);
    }
  } ,[])

  return (
    <div>
      <Navbar className="position-fixed w-100 mt-0 p-0" bg="black" style={{ zIndex: 100 }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="/" className="active">
                HOME
              </Nav.Link>
              <Nav.Link href="/store" className="active">
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
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <button onClick={onCartOpenHandler} className="border border-2 border-primary">Cart {props.cartCount}</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='d-flex justify-content-center bg-secondary mx-auto w-100' style={{height: "40vh"}}>
      <h1 className='display-2 fw-bold d-flex align-items-center text-white'>
        The Generics
      </h1>
    </div>
    </div>
  );
};

export default Header;
