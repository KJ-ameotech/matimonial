import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import Skew from "./Skew";
import News from "./News";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Features />
      {/* <Skew /> */}
      <News />
      <Footer />
    </div>
  );
};

export default Home;
