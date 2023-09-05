import React from "react";

const FullWidthSlider = () => {
  return (
    <div className="section no-padding clip wf-section">
      <div className="grid-wrapper">
        <div className="full-width-slider-wrapper">
          <div
            data-delay="10"
            data-animation="slide"
            className="basic-slider w-slider"
            data-autoplay="true"
            data-easing="ease-out-quad"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="4598f532-4062-03d8-6f50-7259f22ff76a"
            data-autoplay-limit="1"
            data-nav-spacing="6"
            data-duration="700"
            data-infinite="true"
          >
            <div className="basic-mask w-slider-mask">
              {/* Add your slider content here */}
            </div>
            <div
              data-w-id="4598f532-4062-03d8-6f50-7259f22ff76e"
              style={{
                transform:
                  "translate3d(0%, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0,
              }}
              className="dark-slide-arrow left w-slider-arrow-left"
            >
              <div className="slider-arrow-wrapper">
                <img
                  src="images/arrow-left24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
            </div>
            <div
              data-w-id="4598f532-4062-03d8-6f50-7259f22ff770"
              style={{
                transform:
                  "translate3d(0%, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0,
              }}
              className="dark-slide-arrow right w-slider-arrow-right"
            >
              <div className="slider-arrow-wrapper">
                <img
                  src="images/arrow-right24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
            </div>
            <div className="slide-nav tablet-mobile-slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthSlider;
