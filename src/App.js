import { useEffect, useState } from "react";
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
import AuthenticationForm from "./Components/Authentication/AuthenticationForm";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const email=localStorage.getItem('email')
  const updated=email.replace('@gmail.com', '');

  const count=(data)=>{
    const item= data.reduce((acc,item)=>acc+1,0)
    setCartCount(item);
  } 

  const getHandlder=async()=>{
    try{
      const res= await fetch(`https://crudcrud.com/api/8411ebd42c694da885708d8522a64e8c/${updated}`)
      const data= await res.json()
      count(data)   
    }catch(err){
      console.log(err)
    }   
  }
    
  useEffect(()=>{
    getHandlder()
  },[getHandlder])

  return (
    <CartProvider>
      <Router>
        <Header cartCount={cartCount} setOpenCart={setOpenCart} />
        {openCart && <Cart getHandlder={getHandlder} setOpenCart={setOpenCart} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Products getHandlder={getHandlder} count={count}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/productdetails/:productid"
            element={<ProductDetail />}
          />
          <Route path="/auth" element={<AuthenticationForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
