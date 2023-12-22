import React, { useContext, useRef } from "react";
import TokenContext from "../../store/token-context";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const AuthenticationForm = () => {
  const tokenContext = useContext(TokenContext);
  const navigate = useNavigate();
  const alert = useAlert();

  const emailRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const eneteredPassword = passwordRef.current.value;

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAr-7MVii5cKTSvCZs_1cOcYqi7K-zgtmU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: eneteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert.success("Logged In Successfully");
          return res.json();
        } else {
          return res.json().then((data) => {
            alert.error(data.error.message);
            throw new Error("Authentication failed");
          });
        }
      })
      .then((data) => {
        tokenContext.login(data.idToken);
        localStorage.setItem("email", data.email);
        navigate("/store");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="d-flex flex-column m-4 w-50 mx-auto align-items-center"
      onSubmit={formSubmitHandler}
    >
      <h1>LOGIN</h1>
      <div className="d-flex flex-column w-75">
        <label className="fw-bold mt-3">Email</label>
        <input
          className="mt-2"
          type="email"
          name="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="d-flex flex-column w-75">
        <label className="fw-bold mt-3">Password</label>
        <input
          className="mt-2"
          type="password"
          name="password"
          required
          ref={passwordRef}
        />
      </div>
      <div className="d-flex flex-column w-75 align-items-center text-center">
        <button
          className=" fw-bold m-4 w-25 border border-2 rounded bg-primary text-white text-center"
          style={{ height: "40px" }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default AuthenticationForm;
