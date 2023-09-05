import React from "react";

const ProductShowcase = () => {
  return (
    <div className="section no-padding wf-section">
      <div className="grid-wrapper">
        <div
          id="w-node-bfb2943d-5e36-5ece-ad06-498c55a6a85b-98ba7a4d"
          className="product-showcase"
        >
          <div className="showcase-image">
            <div
              data-delay="1000"
              data-animation="over"
              className="slider clip w-slider"
              data-autoplay="false"
              data-easing="ease-in-out-quart"
              data-hide-arrows="false"
              data-disable-swipe="true"
              data-autoplay-limit="1"
              data-nav-spacing="9"
              data-duration="0"
              data-infinite="true"
            >
              <div className="mask w-slider-mask">
                {/* Add your slide content here */}
              </div>
              <div className="slide-arrow-hidden w-slider-arrow-left">
                <img
                  src="images/arrow-left24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
              <div className="slide-arrow-hidden w-slider-arrow-right">
                <img
                  src="images/arrow-right24x242x-5.svg"
                  loading="lazy"
                  alt=""
                  className="slider-arrow"
                />
              </div>
              <div className="slide-nav small w-slider-nav w-round"></div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="showcase-products w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a href="#" className="product-card w-inline-block">
                  <div className="card-image-wrapper">
                    <div className="card-image">
                      <div className="background-product">
                        <div className="image-card one"></div>
                        <div className="image-card two"></div>
                        <div className="image-card three"></div>
                      </div>
                      <div className="image-indicator">
                        <div className="indicator-fill"></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-info">
                    <div
                      id="w-node-afd7a728-112f-adb9-2783-2df7e21b924d-98ba7a4d"
                      className="product-card-top"
                    >
                      <div className="product-card-info">
                        <div className="product-tags">
                          <div className="new-tag">
                            <div className="label-text">New</div>
                          </div>
                          <div className="discount-label">
                            <img
                              src="images/tag---filled-Red24x242x.svg"
                              loading="lazy"
                              id="w-node-afd7a728-112f-adb9-2783-2df7e21b9254-98ba7a4d"
                              alt=""
                              className="tag-icon"
                            />
                            <div className="label-text discount"></div>
                          </div>
                        </div>
                        <div className="stacked-product-title">
                          <h3 className="product-title"></h3>
                          <div className="subtitle small"></div>
                        </div>
                      </div>
                      <div className="dynamic-price">
                        <div className="price-text"></div>
                        <div className="discount-text"></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
