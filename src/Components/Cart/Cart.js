import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [cartElements, setCartElements] = useState([]);

  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@gmail.com", "");

  useEffect(() => {
    getHandler();
  }, []);

  const getHandler = async () => {
    try {
      const res = await fetch(
        `https://crudcrud.com/api/9df7c5fe27cc400889b8a582f8745598/${updatedEmail}`
      );
      const data = await res.json();

      setCartElements(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onCartCloseHandler = () => {
    props.setOpenCart(false);
  };

  const onRemoveItemHandler = (index) => {
    const updatedCart = [...cartElements];

    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
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
                  src={element.imageUrl}
                  alt="product"
                />
                <p>{element.title}</p>
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
                    onClick={() => onRemoveItemHandler(index)}
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
        <p>${cartCtx.total}</p>
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
