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
          console.log("time is up!");
          nextSlide();
          setCompleteSlide(true);
        }, 10000)
      );
    }
  }, [completeSlide]);

  const previousSlide = () => {
    setActiveIndex((value) => {
      if (value <= 0) {
        return children.length - 1;
      } else {
        return value - 1;
      }
    });
  };

  function nextSlide() {
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
        console.log("check me out ", image);
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
        <span className="prevBtn" onClick={previousSlide}>
          &lt;
        </span>
        <span className="nextBtn" onClick={nextSlide}>
          &gt;
        </span>
      </span>
    </div>
  );
};

export default CarouselContainer;
