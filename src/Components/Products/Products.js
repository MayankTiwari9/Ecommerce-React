import React from "react";

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
    <div>
      <h1>MUSIC</h1>
      {productsArr &&
        productsArr.map((product) => {
          return (
            <div>
                <div>
                    <h1>{product.title}</h1>
                </div>
                <div>
              <img src={product.imageUrl} alt="productTitle" />
              </div>
              <div>
                <p>${product.price}</p>
                <button>ADD TO CART</button>
              </div>
            </div>
          );
        })}
        <button>See the cart</button>
    </div>
  );
};

export default Products;
