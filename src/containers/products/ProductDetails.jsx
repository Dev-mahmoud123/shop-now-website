import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.scss";

function ProductDetails() {
  const [productData, setProductData] = useState({});
  const [productImages , setProductImages] = useState([]);
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
      setProductImages(response.data.data.images)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  return (
    <section className="product_details">
      <div className="container">
        <div className="product_images">
          <div className="main_image">
            <img src={productData.image} alt={productData.name} />
          </div>
          <div className="sub_images">
          {
            productImages.map((image ,index)=> {
              return <img src={image} alt={`img ${index +1}`} key= {index}/>
            })
          }
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
           <button className="btn-decrease">-</button>
           <span>0</span>
           <button className="btn-increase">+</button>
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
