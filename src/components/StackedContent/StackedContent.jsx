import React from "react";

const StackedContent = () => {
  return (
    <div className="section clip wf-section">
      <div className="grid-wrapper">
        <div className="stacked-content">
          <div className="width-medium">
            <div className="wrapper-intro centered">
              <div className="stacked-intro">
                <div className="subtitle">Popular</div>
                <h1 className="heading large">Best selling</h1>
              </div>
            </div>
          </div>
          <div className="product-slider-wrapper">
            <div
              data-delay="10"
              data-animation="slide"
              className="product-slider w-slider"
              data-autoplay="true"
              data-easing="ease-out-quad"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-w-id="96d65572-1083-48e5-0168-448bc042eb9f"
              data-autoplay-limit="1"
              data-nav-spacing="3"
              data-duration="600"
              data-infinite="true"
            >
              <div className="product-mask w-slider-mask">
                {/* Add your product slider content here */}
              </div>
              <div
                data-w-id="96d65572-1083-48e5-0168-448bc042eba3"
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
                data-w-id="96d65572-1083-48e5-0168-448bc042eba5"
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
              <div className="hide-slide-nav w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedContent;
