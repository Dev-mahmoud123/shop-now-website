import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.scss";

function ProductDetails() {
  const [productData, setProductData] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selected, setSelected] = useState(null);
  let [quantity, setQuantity] = useState(0);
  const { id } = useParams();

  const getProductData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/products/${id}`, {
        headers: {
          lang: "en",
          "Content-Type": "application/json",
          Authorization: token ?? "",
        },
      });
      console.log(response.data.data);
      setProductData(response.data.data);
      setSelectedImage(response.data.data.image);
      setProductImages(response.data.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  const handleImage = (image, index) => {
    setSelectedImage(image);
    setSelected(index);
  };

  const increaseQuantity = () => {
    setQuantity(quantity++);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity--);
  };

  return (
    <section className="product_details">
      <div className="container">
        <div className="product_images">
          <div className="main_image">
            <img src={selectedImage} alt={productData.name} />
          </div>
          <div className="sub_images">
            {productImages.map((image, index) => {
              return (
                <img
                  src={image}
                  alt={`img ${index + 1}`}
                  key={index}
                  className={index === selected ? "selected" : ""}
                  onClick={() => handleImage(image, index)}
                />
              );
            })}
          </div>
        </div>
        <div className="product_info">
          <h2>{productData.name}</h2>
          <h3>{productData.price} LE</h3>
          <div className="description">
            <h4>Description</h4>
            <p>{productData.description}</p>
          </div>
          <div className="quantity">
            <h4>Quantity</h4>
            <button className="btn-decrease" onClick={() => decreaseQuantity()}>
              -
            </button>
            <span>{quantity}</span>
            <button className="btn-increase" onClick={() => increaseQuantity()}>
              +
            </button>
          </div>
          <div className="btn-wrapper">
            <button className="btn-addToFavorite">ADD TO FAVORITE</button>
            <button className="btn-addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
