import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.cart);
  const cart = cartData.cartItems.length;
  const user = userData.useInfo;
  return (
    <>
      <div className="superNav border-bottom py-2 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block text-white d-sm-inline-block d-xs-none me-3">
                <strong>info@somedomain.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning"></i>
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck  me-1 text-decoration-none text-warning"></i>
                <a className="text-white" href="#">
                  Shipping
                </a>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file   me-2 text-decoration-none text-warning"></i>
                <a className="text-white" href="#">
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fa-solid fa-shop me-2 text-info"></i>
            <strong className="">GEAR SHOP</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" className="form-control border-dark bg-dark" />
              <button className="btn btn-dark text-white">Search</button>
            </div>
          </div> */}
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            {/* <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <input type="text" className="form-control   " />
                <button className="btn btn-dark text-white">Search</button>
              </div>
            </div> */}
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-2" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link mx-2 ">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catalog" className="nav-link mx-2">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link mx-2 ">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link mx-2 ">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link mx-2 ">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/cart" className="nav-link mx-2 ">
                  <button type="button" class="btn  position-relative">
                    <i className="fa-solid fa-cart-shopping me-1 text-info"></i>
                    <span class="position-absolute top-0 start-150 translate-middle badge rounded-pill bg-dark">
                      {cart}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link  " to="/login">
                  <img
                    src={
                      userData.useInfo
                        ? userData.useInfo.image
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU"
                    }
                    className="rounded-circle  img-circle fs-3 "
                    alt="no"
                  />
                </Link>
              </li>
              {userData.useInfo && (
                <p className="text-success py-2">{userData.useInfo.name}</p>
              )}
              {/* <li className="nav-item">
                <Link className="nav-link mx-2 " to="/login">
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
