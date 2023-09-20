import React, { useEffect } from "react";
import image1 from "../assets/images/main-slider/1.jpg"
import "../../src/assets/css/owl.css"
import "./banner.css"
import Swiper from "swiper";


const Banner = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      // ... (your Swiper configuration)
    });

    // Helper function to animate your titles
    function animateTitle(direction) {
      const activeSlide = document.querySelector('.swiper-slide-active');
      const title = activeSlide.querySelector('.slide-title');
      if (!title) return;

      const titleLetters = title.querySelectorAll('span');
      const translateValue = direction === 'next' ? '200px' : '-200px';

      // Apply the animation class to trigger the CSS transition for each letter
      titleLetters.forEach((letter, index) => {
        letter.style.transition = 'transform 0.3s ease';
        letter.style.transform = `translateX(${translateValue})`;
        letter.style.opacity = '0';

        // After a delay, remove the animation class and reset the transform and opacity
        setTimeout(() => {
          letter.style.transition = '';
          letter.style.transform = 'translateX(0)';
          letter.style.opacity = '1';
        }, 300); // Adjust the delay to match your animation duration
      });
    }

    swiper.on('init', () => {
      animateTitle('next');
    });

    swiper.on('slideNextTransitionStart', () => {
      animateTitle('next');
    });

    swiper.on('slidePrevTransitionStart', () => {
      animateTitle('prev');
    });

    return () => {
      // Destroy Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);




  return (
    <>
      {/* <div class="mainBannerSection">
        <section class="banner-section d-none d-lg-block d-xl-block d-md-block mobile_Hidden">
          <div class="banner-carousel owl-carousel owl-theme ">
            <div class="slide-item" style="background-image: url(images/main-slider/1.jpg);">
              <div class="auto-container">
                <div class="content-box mt-5">

                  <h2> Someone Special is <br />Waiting For You</h2>
                  <ul class="info-list">
                    <li><span class="icon fas fa-edit"></span> Sign Up</li>
                    <li><span class="icon fas fa-user-plus"></span> Connect</li>
                    <li><span class="icon fas fa-comments"></span> Interact</li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="slide-item" style={{ backgroundImage: url(image1) }}>
              <div class="auto-container">
                <div class="content-box mt-5">

                  <h2> Find  Your Prefect <br />Match Here!!!</h2>
                  <ul class="info-list">
                    <li><span class="icon fas fa-edit"></span> Sign Up</li>
                    <li><span class="icon fas fa-user-plus"></span> Connect</li>
                    <li><span class="icon fas fa-comments"></span> Interact</li>
                  </ul>

                </div>
              </div>
            </div>

          </div>
        </section>


        <section class="banner-section d-block d-lg-none d-xl-none d-md-none mobile_Hidden">
          <div class="banner-carousel owl-carousel owl-theme banner-carousel-two">

            <div class="slide-item" style={{ backgroundImage: url(image1) }}>
              <div class="auto-container">
                <div class="content-box mt-5">

                  <h2> Someone Special is <br />Waiting For You</h2>
                  <ul class="info-list">
                    <li><span class="icon fas fa-edit"></span> Sign Up</li>
                    <li><span class="icon fas fa-user-plus"></span> Connect</li>
                    <li><span class="icon fas fa-comments"></span> Interact</li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="slide-item" style={{ backgroundImage: `url(${})` }}>
              <div class="auto-container">
                <div class="content-box mt-5">

                  <h2> Find  Your Prefect <br />Match Here!!!</h2>
                  <ul class="info-list">
                    <li><span class="icon fas fa-edit"></span> Sign Up</li>
                    <li><span class="icon fas fa-user-plus"></span> Connect</li>
                    <li><span class="icon fas fa-comments"></span> Interact</li>
                  </ul>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div> */}
      <section className="banner-slider">

        <div class="swiper-container slideshow">

          <div class="swiper-wrapper">

            <div class="swiper-slide slide">
              <div class="slide-image" style={{ backgroundImage: `url(${image1})` }}></div>
              <span class="slide-title">Exotic places</span>
            </div>

            <div class="swiper-slide slide">
              <div class="slide-image" style={{ backgroundImage: `url(${image1})` }}></div>
              <span class="slide-title">Meet ocean</span>
            </div>

            <div class="swiper-slide slide">
              <div class="slide-image" style={{ backgroundImage: `url(${image1})` }}></div>
              <span class="slide-title">Around the world</span>
            </div>
          </div>

          <div class="slideshow-pagination"></div>

          <div class="slideshow-navigation">
            <div class="slideshow-navigation-button prev"><span class="fas fa-chevron-left"></span></div>
            <div class="slideshow-navigation-button next"><span class="fas fa-chevron-right"></span></div>
          </div>

        </div>

      </section>
      <section class="coming-soon-section">
        <div class="auto-container mb-5">
          <div class="outer-box">
            <div class="time-counter">
              <div class="col-md-12">
                <div class="row">
                  <form action="front_search_result?page=1" class="form-inline" method="post">
                    <div class="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label class="label" for="lookingfor"><span class="search">I'm looking for a</span></label>
                      <select class="dropselect" name="gender" selected tabindex="1">
                        <option value="Male">Groom</option>
                        <option value="Female" selected>Bride</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label class="label" for="lookingfor"><span class="search">From Age</span></label>
                      <select class="dropselect" id="fromage" onChange="fillage(this.value)" value="Select" name="txtSAge" tabindex="2" required>
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
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 form-group">
                      <label class="label" for="lookingfor"><span class="search">To Age</span></label>
                      <select class="dropselect" value="Select" id="toage" name="txtEAge" tabindex="3" required>
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
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 form-group">
                      <label class="label" for="lookingfor"><span class="search" >Religion</span></label>
                      <select class="dropselect" value="Select" name="religion" id="religion" onChange="fillcaste(this.value)" tabindex="4" required>
                        <option value="Any" selected>Any</option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Inter-Religion">Inter-Religion</option>
                        <option value="Jain">Jain</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Sikh">Sikh</option>
                      </select>
                      <span></span>
                    </div>
                    <div class="btn-box col-md-2 mt-3 ">
                      <button type="submit" name="submit" value="Lets's Begin" class="theme-btn btn btn-style-two btn-style-letsbegin" >
                        <span class="btn-title">Lets's Begin </span></button>
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

