import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
  {
    backgroundImage:
      'url("https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76d2d6ae6e2a460d9c_bg-2.webp")',
    title: "Gear for Modern Feline Warriors",
    buttonLabel: "Shop All",
    link: "shop.html",
  },
  {
    backgroundImage:
      'url("https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76d2d6ae6e2a460d9c_bg-2.webp")',
    title: "High-Quality Feline Gear Available Now",
    buttonLabel: "Shop All",
    link: "shop.html",
  },
  {
    backgroundImage:
      'url("https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76d2d6ae6e2a460d9c_bg-2.webp")',
    title: "Purrfect Gear for Every Adventure",
    buttonLabel: "Shop All",
    link: "shop.html",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section-hero wf-section">
      <div className="wrapper-slider">
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="slide w-slide"
              style={{ height: "400px" }}
            >
              <div
                className="slide-content"
                style={{ backgroundImage: slide.backgroundImage }}
              >
                <div className="slider-background-base">
                  <div className="slider-background-wrapper">
                    <div className="slider-background">
                      <div className="overlay"></div>
                    </div>
                  </div>
                </div>
                <div className="slide-intro">
                  <h1 className="slide-heading">{slide.title}</h1>
                  <div className="link-wrapper">
                    <a href={slide.link} className="button w-inline-block">
                      <div className="button-text-wrapper">
                        <div className="button-text">{slide.buttonLabel}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
