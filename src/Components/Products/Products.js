import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../store/token-context";

const Products = () => {
  const cartCtx = useContext(CartContext);
  const tokenContext = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenContext.isLoggedIn) {
      navigate("/auth");
    }
  }, [tokenContext.isLoggedIn, navigate]);

  const addToCartHandler = async(item) => {
    const userEmail = localStorage.getItem('email');
    const updatedEmail = userEmail.replace('@gmail.com', '');
    const apiUrl = `https://crudcrud.com/api/9df7c5fe27cc400889b8a582f8745598/${updatedEmail}`;

    try{
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(item),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }catch(err) {
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

  const productsArr = [
    {
      id: 1,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

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
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Text className="text-dark">${product.price}</Card.Text>
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
