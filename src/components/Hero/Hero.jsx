import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContainer from "../slider-components/SliderContainer";

const Hero = () => {
  const settings = {
    autoplay: false, // Set to true for autoplay
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Set this to true if you want arrows
    swipe: false, // Set this to false if you want to disable swipe
  };

  return <SliderContainer />;
};

export default Hero;
