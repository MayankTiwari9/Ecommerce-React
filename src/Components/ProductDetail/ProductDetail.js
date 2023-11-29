import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productid.replace(":", "");

  const productDetails = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      ],
      reviews: [{ user: "User1", comment: "Great product!" }],
    },
    {
      id: 2,

      title: "Black and white Colors",

      price: 50,

      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      ],
      reviews: [{ user: "User1", comment: "Nice product!" }],
    },

    {
      id: 3,

      title: "Yellow and Black Colors",

      price: 70,

      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      ],
      reviews: [{ user: "User1", comment: "Awesome product!" }],
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      ],
      reviews: [{ user: "User1", comment: "Average product!" }],
    },
  ];

  const selectedProduct = productDetails.find((product) => product.id === parseInt(productId, 10));


  return (
    <div className="d-flex flex-column w-50 justify-content-center mx-auto align-items-center">
      <h1 className="d-flex justify-content-center fst-italic">{selectedProduct.title}</h1>

      <div className="d-flex flex-row flex-wrap">
        {selectedProduct.images &&
          selectedProduct.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              style={{ width: "200px", margin: "10px" }}
            />
          ))}
      </div>

      <h2>Reviews</h2>
      <ul>
        {selectedProduct.reviews &&
          selectedProduct.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}</strong>: {review.comment}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
