import React, { useState } from "react";

const Cart = (props) => {
    const [cartElements, setCartElements] = useState([
        {
          title: "Colors",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    
          quantity: 2,
        },
    
        {
          title: "Black and white Colors",
    
          price: 50,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    
          quantity: 3,
        },
    
        {
          title: "Yellow and Black Colors",
    
          price: 70,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    
          quantity: 1,
        },
      ])

  const onCartCloseHandler = () => {
    props.setOpenCart(false);
  };

  const onRemoveItemHandler = (index) => {
    const updatedCart = [...cartElements];

    updatedCart.splice(index,1);
    setCartElements(updatedCart);
  }


  return (
    <div
      className="position-fixed top-0 end-0 bg-white vh-100"
      style={{ width: "35%", marginTop: "5%", zIndex: "100" }}
    >
      <div className="d-flex justify-content-around">
        <h2 className="fst-italic text-black">CART</h2>
        <button className="bg-white rounded h-25 mt-2" onClick={onCartCloseHandler}>X</button>
      </div>
      <div className="d-flex justify-content-around">
      <h5 className="text-black border-bottom border-dark">ITEM</h5>
      <h5 className="text-black border-bottom border-dark">PRICE</h5>
      <h5 className="text-black border-bottom border-dark">QUANTITY</h5>
      </div>
      {cartElements &&
        cartElements.map((element, index) => {
          return (
            <div className="d-flex flex-row justify-content-evenly" key={index}>
              <div className="d-flex justify-content-evenly align-items-center">
                <img className="w-25 rounded" src={element.imageUrl} alt="product" />
                <p>{element.title}</p>
              </div>
              <div>
                <p>{element.price}</p>
              </div>
              <div className="d-flex flex-row justify-content-evenly">
                <input defaultValue={element.quantity} type="number" />
                <button onClick={() => onRemoveItemHandler(index)}>REMOVE</button>
              </div>
            </div>
          );
        })}
      <div>
        <h3>Total</h3>
        <p>$0.00</p>
      </div>
      <div>
        <button>PURCHASE</button>
      </div>
    </div>
  );
};

export default Cart;
