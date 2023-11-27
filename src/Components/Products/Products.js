import React from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="d-flex flex-column">
      <h1 className="d-flex justify-content-center fst-italic">MUSIC</h1>

      {productsArr &&
        productsArr.map((product) => {
          return (
            <Card
              className="d-flex mx-auto mt-3 mb-3 border-0"
              style={{ width: "18rem" }}
            >
              <Card.Title>{product.title}</Card.Title>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body className="d-flex justify-content-around">
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          );
        })}

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
