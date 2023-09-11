import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="main-box">
        <div className="nav-outer clearfix ">
          <nav className="main-menu navbar-expand-md navbar-dark d-flex justify-content-between">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon flaticon-menu-button"></span>
              </button>
            </div>

            <div
              className="collapse navbar-collapse clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li className="current dropdown">
                  <a href="#">Home</a>
                </li>

                <li className="dropdown">
                  <a href="#">About</a>

                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Terms & Condation</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Safe Matrimony</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#">Membership </a>
                </li>

                <li>
                  <a href="#">Search </a>
                </li>
                <li>
                  <a href="#">Contact </a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="auth-btns-box d-flex justify-content-between w-25">
              <div className="btn-box mx-3 d-flex align-items-center">
                <Link
                  to="/login"
                  className="theme-btn btn btn-style-one py-1 px-4 "
                >
                  <span className="btn-title">Login</span>
                </Link>
              </div>
              <div className="btn-box mx-3 d-flex align-items-center">
                <Link
                  to="/signup"
                  className="theme-btn btn btn-style-one py-1 px-4"
                >
                  <span className="btn-title">SignUp</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
