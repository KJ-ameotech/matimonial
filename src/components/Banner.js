import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="mainBannerSection">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-item">
              <img src={Img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <img src={Img2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="coming-soon-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="time-counter">
              <div className="col-md-12">
                <div className="row">
                  <form
                    action="front_search_result?page=1"
                    className="form-inline"
                    method="post"
                  >
                    <div className="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label className="label" for="lookingfor">
                        <span className="search">I'm looking for a</span>
                      </label>
                      <select
                        className="dropselect"
                        name="gender"
                        selected
                        tabindex="1"
                      >
                        <option value="Male">Groom</option>
                        <option value="Female" selected>
                          Bride
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label className="label" for="lookingfor">
                        <span className="search">From Age</span>
                      </label>
                      <select
                        className="dropselect"
                        id="fromage"
                        onchange="fillage(this.value)"
                        value="Select"
                        name="txtSAge"
                        tabindex="2"
                      >
                        <option value="" selected>
                          Select
                        </option>
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
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label className="label" for="lookingfor">
                        <span className="search">To Age</span>
                      </label>
                      <select
                        className="dropselect"
                        value="Select"
                        id="toage"
                        name="txtEAge"
                        tabindex="3"
                      >
                        <option value="" selected>
                          Select
                        </option>
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
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label className="label" for="lookingfor">
                        <span className="search">Religion</span>
                      </label>
                      <select
                        className="dropselect"
                        value="Select"
                        name="religion"
                        id="religion"
                        onchange="fillcaste(this.value)"
                        tabindex="4"
                        required
                      >
                        <option value="Any" selected>
                          Any
                        </option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Inter-Religion">Inter-Religion</option>
                        <option value="Jain">Jain</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Sikh">Sikh</option>
                      </select>
                      <span></span>
                    </div>
                    <div className="btn-box col-md-2 mt-3">
                      <button
                        type="button"
                        name="submit"
                        value="Lets's Begin"
                        className="theme-btn btn btn-style-two btn-style-letsbegin"
                      >
                        <span className="btn-title">Lets's Begin </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
