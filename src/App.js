import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Header setOpenCart={setOpenCart} />
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Routes>
          <Route path="/" element={<><Home />, <Products /></>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
