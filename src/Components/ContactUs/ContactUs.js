import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      number: number,
    };

    await fetch(
      "https://ecommerce-react-f995d-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(userData);

    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div>
      <h1 className="d-flex m-2 justify-content-center">Contact Us</h1>
      <form onSubmit={formSubmitHandler} className="w-50 mx-auto">
        <div className="d-flex flex-column w-100">
          <label className="fw-bold m-2">Name</label>
          <input
            className="p-2"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column w-100">
          <label className="fw-bold m-2">Email Id</label>
          <input
            className="p-2"
            type="email"
            name="emailId"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column w-100">
          <label className="fw-bold m-2">Phone Number</label>
          <input
            className="p-2"
            type="number"
            name="pNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className="d-flex mx-auto m-3 justify-content-center bg-primary text-white border rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
