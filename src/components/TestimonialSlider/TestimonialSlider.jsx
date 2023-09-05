import React from "react";

const TestimonialSlider = () => {
  return (
    <div className="section clip wf-section">
      <div className="grid-wrapper clip">
        <div
          id="w-node-_93ca5de0-540c-2688-b405-63a583e2cc6a-83e2cc68"
          className="wrapper-testimonials"
        >
          <div
            data-delay="10"
            data-animation="slide"
            className="slider-testimonials w-slider"
            data-autoplay="true"
            data-easing="ease-out-quad"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="1"
            data-nav-spacing="9"
            data-duration="700"
            data-infinite="true"
          >
            <div className="mask-testimonials w-slider-mask">
              {/* Testimonial slides go here */}
            </div>
            <div className="testimonial-arrow w-slider-arrow-left">
              <div className="arrow-cover"></div>
              <div className="hover-arrow">
                <img
                  src="images/arrow-left24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
            </div>
            <div className="testimonial-arrow w-slider-arrow-right">
              <div className="arrow-cover"></div>
              <div className="hover-arrow">
                <img
                  src="images/arrow-right24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
            </div>
            <div className="testimonial-slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
