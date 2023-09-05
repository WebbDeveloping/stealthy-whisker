import React from "react";

const Slide = ({ backgroundImage, heading, buttonText }) => {
  return (
    <div className="slide-content">
      <div className="slider-background-base">
        <div className="slider-background-wrapper">
          <div className={`slider-background ${backgroundImage}`}>
            {/* <div className="overlay"></div> */}
          </div>
        </div>
      </div>
      <div className="slide-intro">
        <h1 className="slide-heading">{heading}</h1>
        <div className="link-wrapper">
          <a href="shop.html" className="button w-inline-block">
            <div className="button-text-wrapper">
              <div className="button-text">{buttonText}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
