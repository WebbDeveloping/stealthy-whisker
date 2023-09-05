import React from "react";
import FullWidthSlider from "../components/FullWidthSlider/FullWidthSlider";
import Hero from "../components/Hero/Hero";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import StackedContent from "../components/StackedContent/StackedContent";
import StorySection from "../components/StorySection/StorySection";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* <Hero /> */}
        <Hero />
        <StorySection />
        <FullWidthSlider />
        <StackedContent />
        <ProductShowcase />
        {/* <StackedContent /> */}
        {/* <ProductShowCase /> */}
        <div className="section wf-section">
          <div className="grid-wrapper">
            <div
              id="w-node-cdb1a6c2-62c0-6227-e8af-071c4efc687d-98ba7a4d"
              className="stacked-content medium"
            >
              <div className="wrapper-intro centered">
                <div className="width-large">
                  <div className="stacked-intro">
                    <div
                      id="w-node-_5a66213e-1b6a-15c9-0130-4d61b757d682-98ba7a4d"
                      className="subtitle"
                    >
                      Featured
                    </div>
                    <h1 className="heading large">
                      Look inside our Most selected products
                    </h1>
                  </div>
                </div>
              </div>
              <div className="featured-products">
                <div className="w-dyn-list">
                  <div
                    role="list"
                    className="featured-product-list w-dyn-items"
                  >
                    <div role="listitem" className="w-dyn-item">
                      <div
                        data-w-id="d332ea60-89cb-21a2-02c2-1e3ef71807ce"
                        className="featured-wrapper"
                      >
                        <div
                          id="w-node-d332ea60-89cb-21a2-02c2-1e3ef71807cf-98ba7a4d"
                          className="sticky-heading"
                        >
                          <div className="stacked-intro small">
                            <h1 className="product-title large"></h1>
                            <div className="body-display small"></div>
                          </div>
                          <a href="#" className="underline-link w-inline-block">
                            <div className="button-text-wrapper">
                              <div className="button-text">
                                View full product
                              </div>
                            </div>
                            <div className="link-arrow-wrapper">
                              <img
                                src="images/arrow-right24x242x-8.svg"
                                loading="lazy"
                                alt=""
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="featured-item-image first">
                          <div className="featured-product-image one"></div>
                        </div>
                        <div className="featured-item-image second">
                          <div className="featured-product-image two"></div>
                        </div>
                        <div className="featured-item-image third">
                          <div className="featured-product-image three"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="d9785a76-830f-e5f1-7849-e3c6ab30da0d"
          className="action-section wf-section"
        >
          <div className="stacked-content">
            <div className="action-heading-wrapper">
              <div className="rotating-text">
                <h1 className="slide-heading xl">
                  Prepare Your Cat for Battle with Stealthy Whiskers
                </h1>
              </div>
              <div className="rotating-text">
                <h1 className="slide-heading xl">
                  Prepare Your Cat for Battle with Stealthy Whiskers
                </h1>
              </div>
              <div className="rotating-text">
                <h1 className="slide-heading xl">
                  Prepare Your Cat for Battle with Stealthy Whiskers
                </h1>
              </div>
            </div>
            <div className="grid-wrapper">
              <div
                id="w-node-d9785a76-830f-e5f1-7849-e3c6ab30da14-ab30da0d"
                className="stacked-intro centered medium"
              >
                <div className="width-medium">
                  <div className="body-display light large">
                    Our products are designed to help your feline companion
                    become a skilled and prepared warrior.
                  </div>
                </div>
                <a href="shop.html" className="button w-inline-block">
                  <div className="button-text-wrapper">
                    <div className="button-text">Shop all gear</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="background-wrapper">
            <div className="action-background">
              <div className="overlay gradient"></div>
            </div>
          </div>
        </div>
        {/* Uncomment and replace with your components */}
        {/* <TestimonialSlider /> */}
        {/* <InstagramGrid /> */}
      </div>
    </div>
  );
};

export default Home;
