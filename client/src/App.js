import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Product from "./components/products/Product";
import Login from "./components/user/login/Login";
import Signup from "./components/user/singup/Signup";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import Services from "./components/services/Services";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Layout from "./components/outlet/Layout";
import SingleProduct from "./components/products/SingleProduct";

function App() {
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {preLoader ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Product" element={<Product />} />
              <Route
                path="/single-product/:title"
                element={<SingleProduct />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
