import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./productDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite, getProductData } from "../../redux/actions/products_action";
import { decreaseQuantity, increaseQuantity, setSelectedImage, setSelectedIndex } from "../../redux/reducers/product_reduce";

function ProductDetails() {
  // const [productData, setProductData] = useState({});
  // const [productImages, setProductImages] = useState([]);
  // const [selectedImage, setSelectedImage] = useState("");
  // const [selected, setSelected] = useState(null);
  // let [quantity, setQuantity] = useState(0);
  const { id } = useParams();

  // //
  // const getProductData = useCallback(async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(`/api/products/${id}`, {
  //       headers: {
  //         lang: "en",
  //         "Content-Type": "application/json",
  //         Authorization: token ?? "",
  //       },
  //     });
  //     console.log(response.data.data)
  //     setProductData(response.data.data);
  //     setSelectedImage(response.data.data.image);
  //     setProductImages(response.data.data.images);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [id]);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.product);
  const productData = productDetails?.productData?.data?.data || {} ;
  console.log(productData);

 
  //
  useEffect(() => {
       dispatch(getProductData(id))
  }, [dispatch , id]);


  const handleImage = (image, index) => {
    dispatch(setSelectedImage(image));
    dispatch(setSelectedIndex(index));
  };
  // //
  
  // const decreaseQuantity = () => {
  //   setQuantity(Math.max(quantity-1 , 1));
  // };
  // //
  // const addToFavorite = async (product_id) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.post(
  //       "/api/favorites",
  //       { product_id },
  //       {
  //         headers: {
  //           lang: "en",
  //           "Content-Type": "application/json",
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     toast.success(response.data.message, {
  //       position: "bottom-right",
  //     });
  //   } catch (error) {
  //     toast.error("failed to add product to favorites", {
  //       position: "bottom-left",
  //     });
  //   }
  // };
  // //
  // const addToCart = async (product_id) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.post(
  //       "/api/carts",
  //       { product_id },
  //       {
  //         headers: {
  //           lang: "en",
  //           "Content-Type": "application/json",
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     toast.success(response.data.message, {
  //       position: "bottom-right",
  //     });
  //   } catch (error) {
  //     toast.error("failed to add to cart", {
  //       position: "bottom-left",
  //     });
  //   }
  // };

  return (
    <section className="product_details">
    <div className="container">
    <div className="product_images">
      <div className="main_image">
        <img src={productDetails.selectedImage || productData.image} alt={productData.name} />
      </div>
      <div className="sub_images">
        {productData.images&& productData.images.map((image, index) => {
          return (
            <img
              src={image}
              alt={`img ${index + 1}`}
              key={index}
              className={index === productDetails.selectedIndex ? "selected" : ""}
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
        <button className="btn-decrease" onClick={() =>dispatch(decreaseQuantity())}>
          -
        </button>
        <span>{productDetails.quantity}</span>
        <button className="btn-increase" onClick={() =>dispatch(increaseQuantity())}>
          +
        </button>
      </div>
      <div className="btn-wrapper">
        <button
          className="btn-addToFavorite"
          onClick={() =>{
            //  addToFavorite(productData.id)
            dispatch(addToFavorite(productData.id))
            console.log(productDetails.product.inFavorite)
          }
            }
        >
          ADD TO FAVORITE
        </button>
        <button
          className="btn-addToCart"
          onClick={() => {
            // addToCart(productData.id);
            dispatch(addToCart(productData.id));
            console.log(productDetails.product.inCart)

          }}
        >
          ADD TO CART 
        </button>
      </div>
    </div>
  </div>
    </section>
  );
}

export default ProductDetails;
