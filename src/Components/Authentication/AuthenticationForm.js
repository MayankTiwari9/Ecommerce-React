import React, { useContext, useRef } from 'react'
import TokenContext from '../../store/token-context';

const AuthenticationForm = () => {
    const tokenContext  = useContext(TokenContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current.value;
        const eneteredPassword = passwordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrOuWyBP38zfBWZC5Fp9B7NSOkXPLUmEU',
        {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: eneteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                alert(data.error.message);
                throw new Error("Authentication failed");
              });
            }
          })
          .then((data) => {
            tokenContext.login(data.idToken);
          })
          .catch((err) => {
            console.log(err);
          })
    }

  return (
    <form className='d-flex flex-column m-4 w-50 mx-auto align-items-center' onSubmit={formSubmitHandler}>
        <h1>LOGIN</h1>
      <div className='d-flex flex-column w-75'>
        <label className='fw-bold mt-3'>Email</label>
        <input className='mt-2' type='email' name='email' required ref={emailRef}/>
      </div>
      <div className='d-flex flex-column w-75'>
        <label className='fw-bold mt-3'>Password</label>
        <input className='mt-2' type='password' name='password' required ref={passwordRef}/>
      </div>
      <div className='d-flex flex-column w-75 align-items-center text-center'>
        <button className=' fw-bold m-4 w-25 border border-2 rounded bg-primary text-white text-center' style={{height: "40px"}}>Login</button>
      </div>
    </form>
  )
}

export default AuthenticationForm
