import React from "react";
import Slider from "react-slick";

// Import necessary CSS for Slider

const CustomSlider = ({ settings, slides }) => {
  return (
    <div className="slider w-slider" {...settings}>
      <div className="mask w-slider-mask">
        {slides.map((slide, index) => (
          <div className="slide w-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
