import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { fetchPosts } from "../Redux/Actions/Testing";
import { getLocalStorage, removeLocalStorage } from "../Utils/LocalStorage";


const Navbar = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(false)
  const handleLogout = (e) => {
    e.preventDefault()
    removeLocalStorage('access_token')
    setToken(false)
    navigate("/login")
  }


  setTimeout(() => {
    setToken(getLocalStorage("access_token"))
  }, 1000)
  return (

    <header className="main-header header-style-two">

      <div className="main-box">
        <div className="auto-container clearfix">
          <div className="logo-box">
            <div className="logo"><h6>Ameotech</h6></div>
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

                  <li className="current dropdown"><a href="#">Home</a></li>
                  <li className="dropdown"><a href="#">About</a>
                  </li>
                  <li className="dropdown"><Link to="/membership">Membership</Link></li>
                  <li><a href="#">Search</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#" target="_blank">Blog</a></li>
                </ul>
              </div>
            </nav>
            {/* <!-- Outer box --> */}
            <div className="outer-box">
              {/* <!--Search Box--> */}
              <div className="search-box-btn"><span className="flaticon-search"></span></div>

              {/* <!-- Button Box --> */}
              {!token ?
                <> <div className="btn-box">
                  <Link to="/login" className="theme-btn btn btn-style-one"><span className="btn-title">Login</span></Link>
                </div>
                  <div className="btn-box">
                    <Link to="/signup" className="theme-btn btn btn-style-one"><span className="btn-title">SignUp</span></Link>
                  </div></> : <div className="btn-box" onClick={(e) => handleLogout(e)}>
                  <a href="#" className="theme-btn btn btn-style-one"><span className="btn-title">Logout</span></a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>


      {/* <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
        
        <nav className="menu-box">
            <div className="nav-logo"><a href="index"><img src="images/logo-2.png" alt="" title=""/></a></div>
            
            <ul className="navigation clearfix">
    <li className="dropdown" style="margin-left:22px;margin-top:8px;font-size:16px;font-weight:600"><a href="" style="color:#343a40">Happy Story</a></li><hr>
    <a href="login" className="theme-btn btn-style-one ml-4 mt-2"><span className="btn-title">Login</span></a>
    <a href="signup" className="theme-btn btn-style-one mt-2 ml-3"><span className="btn-title">SignUp</span></a></ul>
        </nav>
    </div> */}

    </header>
  );
};

export default Navbar;
