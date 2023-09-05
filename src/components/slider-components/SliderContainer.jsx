import React from "react";
import CustomSlider from "./CustomSlider";
import Slide from "./Slide";
import NavigationArrows from "./NavigationArrows";

const SliderContainer = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    <Slide
      key="slide1"
      backgroundImage="three"
      heading="Gear for Modern Feline Warriors"
      buttonText="Shop All"
    />,
    <Slide
      key="slide2"
      backgroundImage="four"
      heading="High-Quality Feline Gear Available Now"
      buttonText="Shop All"
    />,
    // Add more slides as needed
  ];

  return (
    <div className="section-hero wf-section">
      <div className="wrapper-slider">
        <CustomSlider settings={sliderSettings} slides={slides} />
        <NavigationArrows />
        <div className="slide-nav w-slider-nav w-round"></div>
      </div>
    </div>
  );
};

export default SliderContainer;
