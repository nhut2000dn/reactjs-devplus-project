import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Testimonial from "../../components/Testimonial";
import Preloader from "../../components/Preloader";
import ScrollUp from "../../components/ScrollUp";
import Skill from "../../components/Skill";
import Campus from "../../components/Campus";
import Admission from "../../components/Admission";
import Concern from "../../components/Concern";
import Footer from "../../components/Footer";
import LazyLoad from "react-lazyload";

const HomePage = () => {
  return (
    <div>
      <Preloader />
      <LazyLoad>
        <Header />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Banner />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <About />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Skill />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Campus />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Admission />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Concern />
      </LazyLoad>
      <LazyLoad height={200} offset={[-100, 100]}>
        <Testimonial />
      </LazyLoad>
      <ScrollUp />
      <LazyLoad height={200} offset={[-100, 100]}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default HomePage;
