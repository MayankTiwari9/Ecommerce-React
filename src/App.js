import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Header setOpenCart={setOpenCart}/>
      <Home />
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
