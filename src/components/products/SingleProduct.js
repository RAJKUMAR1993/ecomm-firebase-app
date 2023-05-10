import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useParams } from "react-router-dom";
import "../products/singleproduct.css";
import { getSingleProduct } from "../../api/Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const [details, setDetails] = useState([]);
  let [baseQuantity, setBaseQuantity] = useState(1);
  console.log(baseQuantity);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  const ratingChanged = (newRating) => {};

  const addProduct = (details) => {
    dispatch(
      addToCart({
        _id: details._id,
        title: details.title,
        price: details.price,
        oldPrice: details.oldPrice,
        image: details.image,
        quantity: baseQuantity,
        description: details.description,
      })
    );
    toast.success(`${details.title}, Add to cart Successfully`);
  };

  return (
    <>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-5">
            <div class="main-img">
              <img class="img-fluid" src={details.image} alt="ProductS" />
              <div class="row my-3 previews py-1">
                <div class="col-md-3">
                  <img class="w-100" src={details.image} alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" src={details.image} alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" src={details.image} alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" src={details.image} alt="Sale" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="main-description px-2">
              <div class="category text-bold">Category: {details.category}</div>
              <div class="product-title  my-3 h6">{details.title}</div>

              <div class="price-area my-4">
                <p class="old-price mb-1">
                  <del>₹ {details.oldPrice}</del>
                  <span class="old-price-discount text-danger">(20% off)</span>
                </p>
                <p class="new-price text-bold mb-1">₹ {details.price}</p>
                <p class="text-secondary mb-1 text-success">
                  (Additional tax may apply on checkout)
                </p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  value={details.rating}
                  activeColor="#ffd700"
                />
              </div>

              <div class="buttons d-flex my-5">
                <div class="block">
                  <a href="#" class="shadow btn custom-btn ">
                    Wishlist
                  </a>
                </div>
                <div class="block quantity d-flex justify-content-between">
                  <button
                    onClick={() =>
                      setBaseQuantity(
                        baseQuantity == 1
                          ? (baseQuantity = 1)
                          : baseQuantity - 1
                      )
                    }
                    type="button"
                    class="btn  increment shadow btn custom-btn-inc"
                  >
                    -
                  </button>
                  <span className="mt-2 m-2">{baseQuantity}</span>
                  <button
                    onClick={() => setBaseQuantity(baseQuantity + 1)}
                    type="button"
                    class="btn  increment shadow btn custom-btn-inc"
                  >
                    +
                  </button>
                </div>
                <div class="block">
                  <button
                    class="shadow btn custom-btn"
                    onClick={() => {
                      addProduct(details);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div class="product-details my-4">
              <p class="details-title text-color mb-1">Product Details</p>
              <p class="description">{details.description}</p>
            </div>

            <div class="row questions bg-light p-3">
              <div class="col-md-1 icon">
                <i class="fa-brands fa-rocketchat questions-icon"></i>
              </div>
              <div class="col-md-11 text">
                Have a question about our products at E-Store? Feel free to
                contact our representatives via live chat or email.
              </div>
            </div>

            <div class="delivery my-4">
              <p class="font-weight-bold mb-0">
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
                <b>Delivery done in 3 days from date of purchase</b>
              </p>
              <p class="text-secondary">
                Order now to get this product delivery
              </p>
            </div>
            <div class="delivery-options my-4">
              <p class="font-weight-bold mb-0">
                <span>
                  <i class="fa-solid fa-filter"></i>
                </span>
                <b>Delivery options</b>
              </p>
              <p class="text-secondary">View delivery options here</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container similar-products my-4">
        <hr />
        <p class="display-5">Similar Products</p>

        <div class="row">
          <div class="col-md-3">
            <div class="similar-product">
              <img
                class="w-100"
                src="https://source.unsplash.com/gsKdPcIyeGg"
                alt="Preview"
              />
              <p class="title">Lovely black dress</p>
              <p class="price">$100</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="similar-product">
              <img
                class="w-100"
                src="https://source.unsplash.com/sg_gRhbYXhc"
                alt="Preview"
              />
              <p class="title">Lovely Dress with patterns</p>
              <p class="price">$85</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="similar-product">
              <img
                class="w-100"
                src="https://source.unsplash.com/gJZQcirK8aw"
                alt="Preview"
              />
              <p class="title">Lovely fashion dress</p>
              <p class="price">$200</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="similar-product">
              <img
                class="w-100"
                src="https://source.unsplash.com/qbB_Z2pXLEU"
                alt="Preview"
              />
              <p class="title">Lovely red dress</p>
              <p class="price">$120</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
