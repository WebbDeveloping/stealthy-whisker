import React from "react";

const StorySection = () => {
  return (
    <div className="section wf-section">
      <div className="grid-wrapper">
        <div className="story-wrapper">
          <div className="story-image">
            <div className="story-background-wrapper">
              <div className="story-background"></div>
            </div>
          </div>
          <div className="story-content">
            <div className="stacked-intro large centered">
              <div className="stacked-intro small">
                <div className="width-large">
                  <h1 className="heading large">
                    Prepare Your Cat for Battle with Stealthy Whiskers
                  </h1>
                </div>
                <div className="width-medium">
                  <div className="body-display">
                    At Stealthy Whiskers, we're more than just a store that
                    sells cat gear. We're passionate cat owners and military
                    enthusiasts who want to help other cat owners train their
                    furry friends to become skilled and prepared warriors. Learn
                    more about our story and how we got started on our mission
                    to help cats become the best they can be.
                  </div>
                </div>
              </div>
              <div className="dual-button">
                <a href="shop.html" className="button dark w-inline-block">
                  <div className="button-text-wrapper">
                    <div className="button-text">ShoP All</div>
                  </div>
                </a>
                <a href="about.html" className="underline-link w-inline-block">
                  <div className="button-text-wrapper">
                    <div className="button-text">Our story</div>
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
            </div>
          </div>
          <div className="story-image">
            <div className="story-background-wrapper">
              <div className="story-background right-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
