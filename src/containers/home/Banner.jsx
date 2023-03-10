import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Banner() {
  const [banner, setBanner] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getBanner = async () => {
    try {
      const response = await axios.get("/api/banners");
      setBanner(response.data.data);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    getBanner();
  }, []);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {banner.map((item, index) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              key={item.id}
              onClick={() => handleSlide(index)}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {banner.map((item, index) => {
          return (
            <div
              className={`carousel-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={item.id}
            >
              <img
                src={item.image}
                className="d-block w-100"
                alt="slider-imag"
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() =>
          handleSlide(activeIndex === 0 ? banner.length - 1 : activeIndex - 1)
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={()=> handleSlide(
          activeIndex === banner.length - 1 ? 0 : activeIndex + 1
        )}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
