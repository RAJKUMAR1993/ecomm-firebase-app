import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {
  deleteCart,
  resetCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/productSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.cart);
  const [payNow, setPayNow] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = cartData.cartItems;
  const user = userData.useInfo;

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [cart]);

  const cartDelete = (_id) => {
    console.log(_id);
    dispatch(deleteCart({ _id }));
    toast.warn(` Delete cart Successfully`);
  };

  const increment = (cartList) => {
    dispatch(
      incrementQuantity({
        _id: cartList._id,
        title: cartList.title,
        price: cartList.price,
        image: cartList.image,
        quantity: cartList.quantity,
        description: cartList.description,
      })
    );
  };

  const decrement = (cartList) => {
    dispatch(
      decrementQuantity({
        _id: cartList._id,
        title: cartList.title,
        price: cartList.price,
        image: cartList.image,
        quantity: 1,
        description: cartList.description,
      })
    );
  };
  const handleCheckOut = () => {
    if (user) {
      setPayNow(true);
    } else {
      toast.error("please login in to checkout");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container py-2">
        <div className="row">
          <aside className="col-lg-9 ">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-right d-none d-md-block"
                        width="200"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.length > 0 ? (
                      cartData.cartItems.map((cartList, index) => {
                        return (
                          <>
                            <tr key={cartList._id}>
                              <td>
                                <figure className="itemside align-items-center">
                                  <div className="aside">
                                    <img
                                      src={cartList.image}
                                      className="img-sm m-2"
                                    />
                                  </div>
                                  <figcaption className="info">
                                    <p
                                      className="title text-dark "
                                      data-abc="true"
                                    >
                                      {cartList.title}
                                    </p>
                                    <p className="text-muted small">
                                      SIZE: L <br /> Brand: MAXTRA
                                    </p>
                                  </figcaption>
                                </figure>
                              </td>
                              <td>
                                <div class="block quantity d-flex justify-content-between">
                                  <button
                                    type="button"
                                    class="btn  increment shadow btn custom-btn-inc"
                                    onClick={() => {
                                      decrement(cartList);
                                    }}
                                  >
                                    -
                                  </button>
                                  <span className="mt-2 m-2">
                                    {cartList.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    class="btn  increment shadow btn custom-btn-inc"
                                    onClick={() => {
                                      increment(cartList);
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>
                                <div className="price-wrap mt-2">
                                  <var className="price m-2 ">
                                    <del>₹{cartList.oldPrice}</del>
                                  </var>
                                  <small className="text-muted">
                                    ₹ {cartList.price}
                                  </small>
                                </div>
                              </td>
                              <td className="text-right d-none d-md-block">
                                <Link
                                  data-original-title="Save to Wishlist"
                                  title=""
                                  href=""
                                  className="btn btn-white"
                                  data-toggle="tooltip"
                                  data-abc="true"
                                >
                                  <AiFillHeart className="fa fa-heart text-info fs-3 m-2" />
                                </Link>
                                <Link
                                  onClick={
                                    () => cartDelete(cartList._id)
                                    // dispatch(deleteCart(alert(cartList._id))) &&
                                    // toast.warn(` Delete cart Successfully`)
                                  }
                                  className="btn btn-white"
                                  data-abc="true"
                                >
                                  <AiFillDelete class="fa-duotone fa-trash text-danger fs-3" />
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      })
                    ) : (
                      <div className="m-3 ">
                        <div className="col-sm-12 text-center">
                          <img
                            src="https://i.imgur.com/dCdflKN.png"
                            width="130"
                            height="130"
                            className="img-fluid mb-4 mr-5"
                          />
                          <h3 className="text-center py-4">
                            <strong>Your Cart is Empty</strong>
                          </h3>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control coupon"
                        name=""
                        placeholder="Coupon code"
                      />
                      <span className="input-group-append">
                        <button className="btn btn-primary btn-apply coupon">
                          Apply
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body ">
                <dl className="dlist-align d-flex justify-content-between">
                  <dt>Total price:</dt>
                  <dd className="text-right ml-3">₹ {totalAmount}</dd>
                </dl>
                <dl className="dlist-align d-flex justify-content-between">
                  <dt>Discount:</dt>
                  <dd className="text-right text-danger ml-3">- $10.00</dd>
                </dl>
                <dl className="dlist-align d-flex justify-content-between">
                  <dt>Total:</dt>
                  <dd className="text-right text-dark b ml-3">
                    ₹ {totalAmount}
                  </dd>
                </dl>
                <hr />
                <div className="d-flex justify-content-between">
                  {/* <a
                    href="#"
                    className="btn btn-sm btn-primary btn-square btn-main mt-2"
                    data-abc="true"
                  >
                    Make Purchase
                  </a> */}

                  <Link
                    onClick={handleCheckOut}
                    className="btn btn-sm btn-success btn-square btn-main mt-2 "
                    data-abc="true"
                  >
                    Process to checkout
                  </Link>
                  {payNow && (
                    <div>
                      <StripeCheckout
                        stripeKey="pk_test_51HI6o8HA4Dkz9s9no01Qil8dHD1d6SH5NnyuOMzTCDnPJBlTaHRFC2r0fQSMkTwYS4eexffU5GAJwj8HaHOztjVE00BN0mMUnZ"
                        name="Ecomm-firebase-app"
                        amount={totalAmount * 100}
                        label=" pay to Ecomm"
                        description={`your payment amount is ${totalAmount}`}
                        token={payNow}
                        email={user.email}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="row py-2">
          <div className="col-md-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() =>
                dispatch(resetCart()) && toast.error("All Products Deleted")
              }
            >
              Reset Cart
            </button>
            <div className="py-2">
              <Link to="/" className="btn btn-sm btn-info">
                <FaLongArrowAltLeft /> Back to Product
              </Link>
            </div>
          </div>
          <div className="col-md-10"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
