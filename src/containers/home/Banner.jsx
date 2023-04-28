import { useState, useEffect, useMemo } from "react";
import React from "react";
// import axios from "axios";
import "./banner.scss";
import { getBanner } from "../../redux/actions/home_action";
import { useDispatch, useSelector } from "react-redux";

function Banner() {
  // const [banner, setBanner] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // const getBanner = async () => {
  //   try {
  //     const response = await axios.get("/api/banners");
  //     setBanner(response.data.data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const dispatch = useDispatch();
  const bannerState = useSelector((state) => state.home.banners);
  const banner = useMemo(() => bannerState?.data?.data || [], [bannerState]);
  console.log(banner);

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [banner.length]);

  const activeBanner = useMemo(() => {
    return banner.length > 0 ? banner[activeIndex] : null;
  }, [activeIndex, banner]);
  //
  const imageSource = useMemo(() => {
    return activeBanner ? activeBanner.image : "";
  }, [activeBanner]);

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
              className={activeIndex === index ? "active" : ""}
              aria-current={activeIndex === index ? "true" : "false"}
              aria-label="Slide 1"
              key={item.id}
              onClick={() => handleSlide(index)}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {activeBanner && (
          <div className="carousel-item active">
            <img
              src={imageSource}
              className="d-block w-100"
              alt="slider-imag"
            />
          </div>
        )}
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
        onClick={() =>
          handleSlide(activeIndex === banner.length - 1 ? 0 : activeIndex + 1)
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
