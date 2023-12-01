import { useCallback, useEffect, useState } from "react";
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

  const getHandlder= useCallback( async()=>{
    try{
      const res= await fetch(`https://crudcrud.com/api/ca48bfc16702419b8ddb0b45517921fd/${updated}`)
      const data= await res.json()
      count(data)   
    }catch(err){
      console.log(err)
    }   
  },[updated])
    
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
          <Route path="/store" element={<Products setOpenCart={setOpenCart} getHandlder={getHandlder} count={count}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/productdetails/:productid"
            element={<ProductDetail  getHandlder={getHandlder}/>}
          />
          <Route path="/auth" element={<AuthenticationForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
