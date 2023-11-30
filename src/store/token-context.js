import React, { useState } from "react";

const TokenContext = React.createContext({
  token: "",
  login: (token) => {},
});

export const TokenContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    token: token,
    login: loginHandler,
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
