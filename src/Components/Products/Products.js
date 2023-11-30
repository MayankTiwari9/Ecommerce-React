import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../store/token-context";
import { productsArr } from "./ProductArray";

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const tokenContext = useContext(TokenContext);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email");
  const updatedEmail = userEmail.replace("@gmail.com", "");

  useEffect(() => {
    if (!tokenContext.isLoggedIn) {
      navigate("/auth");
    }
  }, [tokenContext.isLoggedIn, navigate]);

  const addToCartHandler = async (item) => {
    const apiUrl = `https://crudcrud.com/api/8411ebd42c694da885708d8522a64e8c/${updatedEmail}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);

      const existingItem = data.find((element) => element.id === item.id);
      console.log(existingItem);

      if (existingItem) {
        const quantity = existingItem.quantity + 1;

        console.log(existingItem._id);
        const id = existingItem._id;
        console.log(id);
        await fetch(`https://crudcrud.com/api/8411ebd42c694da885708d8522a64e8c/${updatedEmail}/${id}`,{
          method: 'DELETE'
        })

        await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",// Add this line
          },
          body: JSON.stringify({ ...item, quantity: quantity }),
        });

      } else {
        await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",// Add this line
          },
          body: JSON.stringify({ ...item, quantity: 1 }),
        });
      }
      props.getHandlder();
    } catch (err) {
      console.log(err);
    }

    cartCtx.addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: item.quantity || 1,
    });
  };

  return (
    <div className="d-flex flex-column w-50 justify-content-center mx-auto">
      <h1 className="d-flex justify-content-center fst-italic">MUSIC</h1>
      <div className="d-flex flex-column">
        {productsArr &&
          productsArr.map((product) => {
            return (
              <Card
                key={product.id}
                className="d-flex mx-auto mt-3 mb-3 border-0"
                style={{ width: "18rem" }}
              >
                <Link
                  className="text-decoration-none"
                  to={`/productdetails/${product.id}`}
                  key={product.id}
                >
                  <Card.Title className="text-dark">{product.title}</Card.Title>
                  <Card.Img variant="top" src={product.img1} />
                  <Card.Text className="text-dark">₹{product.price}</Card.Text>
                </Link>
                <Card.Body className="d-flex justify-content-around">
                  <Button
                    variant="primary"
                    onClick={() => addToCartHandler(product)}
                  >
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <Button
        variant="secondary d-flex mx-auto mb-5 justify-content-center text-black"
        style={{ width: "200px" }}
      >
        See the cart
      </Button>
    </div>
  );
};

export default Products;
