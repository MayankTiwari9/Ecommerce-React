import React, { useCallback, useEffect, useState } from "react";
import { useAlert } from "react-alert";

const Cart = (props) => {
  const [cartElements, setCartElements] = useState([]);
  const alert = useAlert();

  const [total, setTotal] = useState(0);
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@gmail.com", "");

  const getHandler = useCallback(async () => {
    try {
      const res = await fetch(
        `https://ecommerce-website-62ebe-default-rtdb.firebaseio.com/${updatedEmail}/products.json`
      );
      const data = await res.json();

      const dataAsArray = Object.entries(data).map(([key, value]) => ({
        ...value,
        _id: key,
      }));
      setCartElements(dataAsArray);

      const count = dataAsArray.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setTotal(count);
    } catch (err) {
      console.log(err.message);
    }
  }, [updatedEmail]);

  useEffect(() => {
    getHandler();
  }, [getHandler]);

  const onCartCloseHandler = () => {
    props.setOpenCart(false);
  };

  const onRemoveItemHandler = async (id) => {
    try {
      await fetch(
        `https://ecommerce-website-62ebe-default-rtdb.firebaseio.com/${updatedEmail}/products/${id}.json`,
        {
          method: "DELETE",
        }
      );

      // Fetch the updated data from the API
      const res = await fetch(
        `https://ecommerce-website-62ebe-default-rtdb.firebaseio.com/${updatedEmail}/products.json`
      );
      const data = await res.json();

      if (!data) {
        setCartElements([]); // Set cartElements to an empty array if data is undefined or null
        setTotal(0);
      }else{

      // Update the state based on the fetched data
      const dataAsArray = Object.entries(data).map(([key, value]) => ({
        ...value,
        _id: key,
      }));
      setCartElements(dataAsArray);

      const count = dataAsArray.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setTotal(count);
    }

      // Call the parent component's handler to update the count in the header
      await props.getHandlder();

      alert.success("Item Removed From Cart");
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <div
      className="overflow-scroll position-fixed top-0 end-0 bg-white"
      style={{ width: "40%", marginTop: "5%", zIndex: "100", height: "90vh" }}
    >
      <div className="d-flex justify-content-around mt-2">
        <h2 className="fst-italic text-black">CART</h2>
        <button
          className="bg-white rounded h-25 mt-2"
          onClick={onCartCloseHandler}
        >
          X
        </button>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <h5 className="text-black border-bottom border-dark w-25 text-center">
          ITEM
        </h5>
        <h5 className="text-black border-bottom border-dark w-25 text-center">
          PRICE
        </h5>
        <h5 className="text-black border-bottom border-dark w-25 text-center">
          QUANTITY
        </h5>
      </div>
      {cartElements &&
        cartElements.map((element, index) => {    
          return (
            <div
              className="d-flex flex-row align-items-center justify-content-center mt-3"
              key={index}
            >
              <div className="d-flex flex-row p-2 align-items-center text-black  w-50 text-center">
                <img
                  className="w-75 rounded"
                  src={element.img1}
                  alt="product"
                />
                <p>{element.name}</p>
              </div>
              <div className="d-flex flex-column  align-items-center w-50">
                <p className="w-25 text-center">{element.price}</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center w-50">
                <div className="d-flex justify-content-around">
                  <input
                    style={{ width: "20%" }}
                    className="h-50 d-flex border border-primary"
                    defaultValue={element.quantity}
                    type="number"
                  />
                  <button
                    className="text-white bg-danger"
                    onClick={() => onRemoveItemHandler(element._id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <div className="d-flex justify-content-around mt-3">
        <h3>Total</h3>
        <p>₹{total}</p>
      </div>
      <div>
        <button className="text-white bg-primary mx-auto d-flex rounded-3">
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
