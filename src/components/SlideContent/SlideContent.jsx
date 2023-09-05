import React from "react";

const SlideContent = ({ headingText, buttonText, buttonLink }) => {
  return (
    <div className="slide-content">
      <div className="slider-background-wrapper">
        <div className="slider-background">
          <div className="overlay"></div>
        </div>
      </div>
      <div className="slide-intro">
        <h1 className="slide-heading">{headingText}</h1>
        <div className="link-wrapper">
          <a href={buttonLink} className="button w-inline-block">
            <div className="button-text-wrapper">
              <div className="button-text">{buttonText}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
