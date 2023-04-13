import React from "react";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { addUser, removeUser } from "../../redux/productSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        toast.success(` Login Successfully`);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // sign-out successfully
        toast.success(` Log out Successfully`);
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="pt-5 pb-5 mt-0 align-items-center d-flex section-login">
        <div className="container">
          <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
            <div className="col-12 col-md-4 col-lg-3   h-50 ">
              <div className="d-flex justify-content-center position-relative">
                <p>
                  <Link
                    onClick={handleGoogleLogin}
                    className="btn btn-sm shadow-sm bg-body rounded mr-3"
                  >
                    <i className="fab fa-google fa-google text-decoration-none"></i>
                    <span className="text-bold"> Login with Google</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-dark mb-1 logutButton"
                  >
                    Sign Out
                  </button>
                  <br />
                  <Link
                    to=""
                    className="btn btn-sm shadow-sm bg-body rounded mr-3"
                  >
                    <i className="fab fa-github text-dark mr-4 text-decoration-none"></i>
                    <span className="text-bold"> Login With Github</span>
                  </Link>
                  <button className="btn btn-sm btn-dark mb-3  logutButtonone">
                    Sign Out
                  </button>
                </p>
              </div>

              {/* <form>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        name=""
                        class="form-control"
                        placeholder="Full name"
                        type="text"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        name=""
                        class="form-control"
                        placeholder="Email address"
                        type="email"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        class="form-control"
                        placeholder="Create password"
                        type="password"
                      />
                    </div>
                    <div class="form-group input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        class="form-control"
                        placeholder="Repeat password"
                        type="password"
                      />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Create Account
                      </button>
                    </div>
                    <p class="text-center">
                      Have an account?
                      <a href="">Log In</a>
                    </p>
                  </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
