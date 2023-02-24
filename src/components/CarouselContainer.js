import React, { useEffect, useState } from "react";
import "./carousel.css";

const CarouselContainer = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completeSlide, setCompleteSlide] = useState(true);
  const [timeId, setTimeId] = useState(null);

  useEffect(() => {
    if (completeSlide) {
      setCompleteSlide(false);
      setTimeId(
        setTimeout(() => {
          nextSlide();
          setCompleteSlide(true);
        }, 10000)
      );
    }
  }, [completeSlide]);

  const previousSlide = () => {
    // setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    setActiveIndex((value) => {
      if (value <= 0) {
        return children.length - 1;
      } else {
        return value - 1;
      }
    });
  };

  function nextSlide() {
    // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    setActiveIndex((value) => {
      if (value >= children.length - 1) {
        return 0;
      } else {
        return value + 1;
      }
    });
  }

  const startSlider = () => {
    if (timeId > 0) {
      setCompleteSlide(false);
      clearTimeout(timeId);
    }
  };
  const stopSlider = () => {
    if (!completeSlide) {
      setCompleteSlide(true);
    }
  };

  return (
    // child map
    <div
      className="carousel-wrapper "
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      {children.map((image, index) => {
        return (
          <>
            <div
              key={index}
              className={
                "carousel_item carousel_item_active-" + (activeIndex + 1)
              }
            >
              {image}
            </div>
          </>
        );
      })}
      {/* Dot slider navigations */}
      <div className="carousel-links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      {/* Button navigations */}
      <span>
        <button className="prevBtn" onClick={previousSlide}>
          &lt;
        </button>
        <button className="nextBtn" onClick={nextSlide}>
          &gt;
        </button>
      </span>
    </div>
  );
};

export default CarouselContainer;
