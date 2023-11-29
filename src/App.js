import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Header setOpenCart={setOpenCart} />
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/productdetails/:productid" element={<ProductDetail/>}/>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
