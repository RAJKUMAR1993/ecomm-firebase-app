import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { getAllProduct } from "../../api/Api";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProduct = async () => {
    const response = await getAllProduct();
    setProducts(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const ratingChanged = (newRating) => {};

  const handleChang = (title) => {
    const _id = String(title).toLocaleLowerCase().split(" ").join("");

    navigate(`/single-product/${_id}`, {
      state: {
        item: products,
      },
    });
  };

  // addtocart

  const addProduct = (details) => {
    dispatch(addToCart(details));
    toast.success(`${details.title}, Add to cart Successfully`);
  };
  return (
    <>
      <Banner />
      <section className="container py-3">
        <div className="row">
          <div className="col-12">
            <div className="bg-dark w-25  mx-auto">
              <h3 className=" text-center fw-bolder text-start ">
                <starong className="text-info mb-1">Our Brand </starong>
              </h3>
            </div>
            <div className="">
              <p className="fst-italic fs-6">
                What are features and benefits? Think about what gets you
                excited about your product that makes it different from your
                competitors’ products. It might be careful construction,
                ethically sourced materials, or all the bells and whistles you
                dreamed up over drinks one night. Those are features. Now, think
                about what those things do for your customer. Does careful
                construction mean that your product is safe for children? Do
                ethically sourced materials make the buyer feel good about
                purchasing your product? Do those bells and whistles make
                everyone who sees your customer with your product weep with
                envy? Those are benefits. In product descriptions, it’s easy to
                fall into the trap of only describing the features of your
                products. But when you just list the features, you’re not
                actually helping your buyer understand how your product will
                help them. Let’s talk about a product page that communicates
                both features and benefits effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h5 className="text-success product-text">New Products</h5>
        <hr className="bg-success h-25" />
        <div className="row">
          <div className="row">
            {products.map((item, index) => {
              return (
                <>
                  <div className="col-md-3 col-sm-6" key={index}>
                    <div className="product-grid">
                      <div
                        className="product-image"
                        onClick={() => {
                          handleChang(item.title);
                        }}
                      >
                        <Link className="image">
                          <img className="pic-1" src={item.image} />
                          <img className="pic-2" src={item.image} />
                        </Link>
                        <span className="product-sale-label">hot</span>
                        <span className="product-discount-label">-33%</span>
                      </div>
                      <div className="product-content">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          value={item.rating}
                          activeColor="#ffd700"
                        />
                        <h3 className="title">
                          <Link to="#" className="text-decoration-none">
                            {item.title.substring(0, 100)}
                          </Link>
                        </h3>
                        <div className="price">
                          <span>₹ 100</span> ₹{item.price}
                        </div>
                        <div className="product-button-group">
                          <Link className="product-like-icon" to="#">
                            <i className="fas fa-heart"></i>
                          </Link>
                          <Link
                            className="add-to-cart  text-decoration-none"
                            onClick={() => {
                              addProduct(item);
                            }}
                          >
                            <i className="fa fa-shopping-bag"></i>
                            ADD TO CART
                          </Link>
                          <Link className="product-compare-icon" to="#">
                            <i className="fas fa-random"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
