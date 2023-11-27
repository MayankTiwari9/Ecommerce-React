import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartProvider>
      <Header setOpenCart={setOpenCart}/>
      <Home />
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
