import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "./categories.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("/api/categories", {
        headers: {
          lang: "en",
        },
      });
      setCategories(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide:  3// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="container">
        <Carousel className="carousel" responsive={responsive}>
          {categories.map((category) => {
            return (
              <div class="card" key={category.id}>
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Categories;
