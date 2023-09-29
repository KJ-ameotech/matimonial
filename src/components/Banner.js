import React, { useState } from "react";
import image1 from "../assets/images/main-slider/1.jpg"
import "../../src/assets/css/owl.css"
// import "./banner.css"
import OwlCarousel from 'react-owl-carousel';
import { getSearchProfileUser } from "../Redux/Actions/ProfileActions";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../Utils/LocalStorage";

const Banner = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    looking_for: "",
    from_age: "",
    to_age: "",
    religion: ""
  })
  // const [error, setError] = useState(false)
  const options = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'slideOutUp',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  const handleSearch = (e) => {
    const { name, value } = e.target
    setSearchData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchData.from_age && searchData.to_age && searchData.looking_for && searchData.religion) {
      const quary = `?age_from=${searchData.from_age}&age_to=${searchData.to_age}&gender=${searchData.looking_for}&religion=${searchData.religion}`
      dispatch(getSearchProfileUser(quary))
      navigate("/searchprofiles")
    }

  }
  return (
    <>
      <div className="mainBannerSection">
        <section className="banner-section d-none d-lg-block d-xl-block d-md-block mobile_Hidden">
          <div className="banner-carousel owl-carousel owl-theme ">
            <OwlCarousel classNameName="owl-theme" {...options}>
              <div className="slide-item" style={{ backgroundImage: `url(${image1})` }}>
                <div className="auto-container">
                  <div className="content-box mt-5">

                    <h2> Someone Special is <br />Waiting For You</h2>
                    <ul className="info-list">
                      <li><span className="icon fas fa-edit"></span> Sign Up</li>
                      <li><span className="icon fas fa-user-plus"></span> Connect</li>
                      <li><span className="icon fas fa-comments"></span> Interact</li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className="slide-item" style={{ backgroundImage: `url(${image1})` }}>
                <div className="auto-container">
                  <div className="content-box mt-5">

                    <h2> Find  Your Prefect <br />Match Here!!!</h2>
                    <ul className="info-list">
                      <li><span className="icon fas fa-edit"></span> Sign Up</li>
                      <li><span className="icon fas fa-user-plus"></span> Connect</li>
                      <li><span className="icon fas fa-comments"></span> Interact</li>
                    </ul>

                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section className="banner-section d-block d-lg-none d-xl-none d-md-none mobile_Hidden">
          <div className="banner-carousel owl-carousel owl-theme banner-carousel-two">
            <OwlCarousel classNameName="owl-theme" {...options}>
              <div className="slide-item" style={{ backgroundImage: `url(${image1})` }}>
                <div className="auto-container">
                  <div className="content-box mt-5">

                    <h2> Someone Special is <br />Waiting For You</h2>
                    <ul className="info-list">
                      <li><span className="icon fas fa-edit"></span> Sign Up</li>
                      <li><span className="icon fas fa-user-plus"></span> Connect</li>
                      <li><span className="icon fas fa-comments"></span> Interact</li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className="slide-item" style={{ backgroundImage: `url(${image1})` }}>
                <div className="auto-container">
                  <div className="content-box mt-5">

                    <h2> Find  Your Prefect <br />Match Here!!!</h2>
                    <ul className="info-list">
                      <li><span className="icon fas fa-edit"></span> Sign Up</li>
                      <li><span className="icon fas fa-user-plus"></span> Connect</li>
                      <li><span className="icon fas fa-comments"></span> Interact</li>
                    </ul>

                  </div>
                </div>
              </div>
            </OwlCarousel>





          </div>
        </section>
      </div>
      <section className="coming-soon-section">
        <div className="auto-container mb-5">
          <div className="outer-box">
            <div className="time-counter">
              <div className="col-md-12">
                <div className="row">
                  <form className="form-inline" onSubmit={handleSearchSubmit}>
                    <div className="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label className="label" for="lookingfor"><span className="search">I'm looking for a</span></label>
                      <select className="dropselect" name="looking_for" value={searchData.looking_for} selected tabindex="1" onChange={handleSearch} >
                        <option value="Male">Groom</option>
                        <option value="Female" selected>Bride</option>
                      </select>
                      {/* <p className="form-text " style={{ color: "red" }}>{(!searchData.looking_for && error) ? "Looking for is Required" : ""}</p> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label className="label" for="lookingfor"><span className="search">From Age</span></label>
                      <select className="dropselect" id="fromage" onChange={handleSearch} value={searchData.from_age} name="from_age" tabindex="2" required>
                        <option value="" selected>Select</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                        <option value="61">61</option>
                        <option value="62">62</option>
                        <option value="63">63</option>
                        <option value="64">64</option>
                        <option value="65">65</option>
                      </select>
                      {/* <p className="form-text " style={{ color: "red" }}>{(!searchData.from_age && error) ? "From age is Required" : ""}</p> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label className="label" for="lookingfor"><span className="search">To Age</span></label>
                      <select className="dropselect" id="toage" value={searchData.to_age} name="to_age" tabindex="3" onChange={handleSearch} required>
                        <option value="" selected>Select</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                        <option value="61">61</option>
                        <option value="62">62</option>
                        <option value="63">63</option>
                        <option value="64">64</option>
                        <option value="65">65</option>
                      </select>
                      {/* <p className="form-text " style={{ color: "red" }}>{(!searchData.to_age && error) ? "To age is Required" : ""}</p> */}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label className="label" for="lookingfor"><span className="search" >Religion</span></label>
                      <select className="dropselect" value={searchData.religion} name="religion" id="religion" tabindex="4" onChange={handleSearch} required>
                        <option value="Any" selected>Any</option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Inter-Religion">Inter-Religion</option>
                        <option value="Jain">Jain</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Sikh">Sikh</option>
                      </select>
                      {/* <p className="form-text " style={{ color: "red" }}>{(!searchData.religion && error) ? "Religion is Required" : ""}</p> */}
                    </div>
                    <div className="btn-box col-md-2 mt-3 ">
                      <button value="Lets's Begin" className="theme-btn btn btn-style-two btn-style-letsbegin">
                        <span className="btn-title">Lets's Begin </span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
