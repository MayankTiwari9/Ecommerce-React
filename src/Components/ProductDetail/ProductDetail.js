import React from "react";
import { Badge, Button, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productsArr } from "../Products/ProductArray";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productid.replace(":", "");

  const selectedProduct = productsArr.find(
    (product) => product.id === parseInt(productId, 10)
  );

  return (
    <>
      <div className="d-flex m-5">
        <div className="w-50">
          <Carousel className="carousel m-2">
            <Carousel.Item>
              {" "}
              <img
                src={selectedProduct.img1}
                alt=""
                height="400px"
                className="d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedProduct.img2}
                alt=""
                height="400px"
                className="d-block w-100 "
              />{" "}
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedProduct.img3}
                alt=""
                height="400px"
                className="d-block w-100 "
              />
            </Carousel.Item>
          </Carousel>
          <div className="button-container">
            <Button variant="outline-success">Buy Now</Button>
            <Button variant="outline-warning">Add to Cart</Button>
          </div>
        </div>

        <div className="mx-auto product-details">
          <h1>{selectedProduct.name}</h1>
          <p className="fw-bolder">Rs.{selectedProduct.price}/-</p>
          <Badge>{selectedProduct.rating}⭐</Badge>
          <div className="offers">
            <h3>Available offers</h3>
            <p>
              🏷️ Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up
              to ₹1,000 on orders of ₹5,000 and aboveT&C
            </p>
            <p>
              🏷️ Bank Offer10% off on Flipkart Axis Bank Credit Card EMI
              Transactions, up to ₹1000 on orders of ₹5000 and aboveT&C
            </p>
            <p>
              🏷️ Bank Offer10% off on Citi Credit Card EMI Transactions, up to
              ₹1,000 on orders of ₹5,000 and aboveT&C
            </p>
            <p>
              🏷️ Special PriceGet extra ₹8901 off (price inclusive of
              cashback/coupon)T&C
            </p>
          </div>
          <div className="reviews">
            <h4>Reviews</h4>
            <div className="d-flex">
              <Badge>5⭐</Badge>
              <h6>Terrific</h6>
            </div>
            <p>
              I've reviewed and tested iPhones for years, but Apple's new iPhone
              15 Pro Max is the first time I've ever been this enamored.
            </p>
            <div className="d-flex">
              <Badge>4.3⭐</Badge>
              <h6>Super !</h6>
            </div>
            <p>Excellent . Just loved it .😍.</p>
            <div className="d-flex">
              <Badge>4.3⭐</Badge>
              <h6>Excellent...</h6>
            </div>
            <p>
              The phone is just 10/10. Amazing cameras, especially the 5x
              telephoto. Battery life goes over a day. The bezels look thin as
              well. Better to use with a case to prevent discolouration of the
              titanium body.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
