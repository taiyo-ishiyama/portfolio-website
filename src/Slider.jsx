// import Swiper core and required modules
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import project1Image from "./img/PROJECT1.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        900: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide
        className='transform transition-transform duration-300 ease-in-out hover:scale-105'
        style={{
          backgroundImage: `url(${project1Image})`,
          backgroundSize: "cover",
          width: "300px",
          height: "200px",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className='absolute inset-0 flex text-xl items-center justify-center text-gray-900 font-medium backdrop-blur-sm hover:backdrop-blur-0'>
            <h3>Portfolio Website</h3>
          </div>
          {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: 0,
              background: "#fff",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            }}
          >
            {/* Tooltip content */}
            This is a tooltip!
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        className='transform transition-transform duration-300 ease-in-out hover:scale-105'
        style={{
          backgroundImage: `url(${project1Image})`,
          backgroundSize: "cover",
          width: "300px",
          height: "200px",
        }}
      >
        <div className='absolute inset-0 flex text-xl items-center justify-center text-gray-900 font-medium backdrop-blur-sm hover:backdrop-blur-0'>
          <h3>Portfolio Website</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className='transform transition-transform duration-300 ease-in-out hover:scale-105'
        style={{
          backgroundImage: `url(${project1Image})`,
          backgroundSize: "cover",
          width: "300px",
          height: "200px",
        }}
      >
        <div className='absolute inset-0 flex text-xl items-center justify-center text-gray-900 font-medium backdrop-blur-sm hover:backdrop-blur-0'>
          <h3>Portfolio Website</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className='transform transition-transform duration-300 ease-in-out hover:scale-105'
        style={{
          backgroundImage: `url(${project1Image})`,
          backgroundSize: "cover",
          width: "300px",
          height: "200px",
        }}
      >
        <div className='absolute inset-0 flex text-xl items-center justify-center text-gray-900 font-medium backdrop-blur-sm hover:backdrop-blur-0'>
          <h3>Portfolio Website</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
