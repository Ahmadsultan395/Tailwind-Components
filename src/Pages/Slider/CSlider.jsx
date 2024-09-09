import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import './CSlider.css'; // Import custom CSS

function CSlider() {
  const sliderRef = useRef(null);

  const handleAfterChange = (currentSlide) => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      slide.classList.remove("prev-slide", "next-slide");
    });

    const totalSlides = slides.length;
    const centerSlide = Array.from(slides).findIndex(slide => slide.classList.contains("slick-center"));

    const prevIndex = (centerSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (centerSlide + 1) % totalSlides;

    if (slides[prevIndex]) slides[prevIndex].classList.add("prev-slide");
    if (slides[nextIndex]) slides[nextIndex].classList.add("next-slide");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    afterChange: handleAfterChange, // Use the callback function
  };

  const listData = [
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
    { img: '/bg.jpg' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {listData.map((row, index) => (
          <div key={index} className="slider-item">
            <img src={row.img} alt="" className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CSlider;
