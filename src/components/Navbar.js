import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../Utils/LocalStorage";


const Navbar = ({ auth }) => {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const handleLogout = (e) => {
    e.preventDefault()
    removeLocalStorage('access_token')
    removeLocalStorage('refresh_token')
    removeLocalStorage('user_id')
    window.location.href = "/login"
  }
  console.log(pathname, "location");
  return (

    <header className="main-header header-style-two" >

      <div className="main-box" >
        <div className="auto-container clearfix" >
          <div className="logo-box" onClick={() => navigate("/")}>
            <div class="logo"><img src="/assets/images/mainlogo.png" /></div>
          </div>
          <div className="nav-outer clearfix">
            <div className="mobileapp_Icon1">
              <a href="" target="_blank"><img src="images/app-ic.png" /></a>
            </div>
            <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon flaticon-menu-button"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className={`${pathname === "/" ? 'current' : ""} dropdown`}><Link to="/">Home</Link></li>
                  <li className={`${pathname === "/about" ? 'current' : ""} dropdown`}><Link to="/about">About</Link>
                  </li>
                  <li className={`${pathname === "/membership" ? 'current' : ""} dropdown`}><Link to="/membership">Membership</Link></li>
                  <li><a href="#">Search</a></li>
                  <li className={`${pathname === "/contact-us" ? 'current' : ""} dropdown`}><Link to="/contact-us">Contact</Link></li>
                  {/* <li><a href="#" target="_blank">Blog</a></li> */}
                </ul>
              </div>
            </nav>
            <div className="outer-box">
              <div className="search-box-btn"><span className="flaticon-search"></span></div>
              {!auth ?
                <> <div className="btn-box">
                  <Link to="/login" className="theme-btn btn btn-style-one"><span className="btn-title">Login</span></Link>
                </div>
                  <div className="btn-box">
                    <Link to="/signup" className="theme-btn btn btn-style-one"><span className="btn-title">SignUp</span></Link>
                  </div></> :
                <div className="btn-box" onClick={(e) => handleLogout(e)}>
                  <a href="#" className="theme-btn btn btn-style-one"><span className="btn-title">Logout</span></a>
                </div>}
            </div>
          </div>
        </div>
      </div >
    </header >
  );
};

export default Navbar;
