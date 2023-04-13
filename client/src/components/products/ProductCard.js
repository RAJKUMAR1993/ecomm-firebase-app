import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../../api/Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  const _id = products.title;
  const navigate = useNavigate();
  //remove space and upper case characters
  const _idString = (_id) => {
    return String(_id).toLocaleLowerCase().split(" ").join("");
  };
  const product_id = _idString(_id);
  const handleProductDetails = () => {
    console.log("single-product");
    navigate(`/single-product/${product_id}`, {
      state: {
        item: products,
      },
    });
  };

  const ratingChanged = (newRating) => {};

  return (
    <>
      <div className="row">
        <div className="product-grid">
          <div className="product-image" onClick={handleProductDetails}>
            <Link
              to=""
              // to={`/single-product/${products.title}`}
              className="image"
            >
              <img className="pic-1" src={products.image} />
              <img className="pic-2" src={products.image} />
            </Link>
            <span className="product-sale-label">hot</span>
            <span className="product-discount-label">-33%</span>
          </div>
          <div className="product-content">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              value={products.rating}
              activeColor="#ffd700"
            />
            <h3 className="title">
              <Link to="#" className="text-decoration-none">
                {products.title}
              </Link>
            </h3>
            <div className="price">
              <span>₹ 100</span> ₹{products.price}
            </div>
            <div className="product-button-group">
              <Link className="product-like-icon" to="#">
                <i className="fas fa-heart"></i>
              </Link>
              <button
                className="add-to-cart btn btn-sm   text-decoration-none"
                onClick={() => {
                  dispatch(
                    addToCart({
                      _id: products._id,
                      title: products.title,
                      image: products.image,
                      price: products.price,
                      quantity: 1,
                      description: products.description,
                    })
                  );
                }}
              >
                <i className="fa fa-shopping-bag"></i>
                ADD TO CART
              </button>
              <Link className="product-compare-icon" to="#">
                <i className="fas fa-random"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
