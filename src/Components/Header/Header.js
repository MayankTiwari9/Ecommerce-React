import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartOpenHandler = () => {
    props.setOpenCart(true);
  }

  return (
    <div>
      <Navbar className="position-fixed w-100" bg="black" style={{ zIndex: 100 }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="#home" className="active">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="active">
                STORE
              </Nav.Link>
              <Nav.Link href="#about" className="active">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <button onClick={onCartOpenHandler} className="border border-2 border-primary">Cart {cartCtx.items.length}</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
