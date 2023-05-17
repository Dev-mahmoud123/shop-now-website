import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";

function Products() {
  // const [products, setProducts] = useState([]);

  // const getAllProducts = async () => {
  //   try {
  //     const response = await axios.get("/api/home", {
  //       headers: {
  //         lang: "en",
  //       },
  //     });
  //     setProducts(response.data.data.products);
  //   } catch (error) { 
  //     console.log(error);
  //   }
  // };

const dispatch = useDispatch();
const productsSelect = useSelector((state)=>state.product.allProducts);
const products = productsSelect?.data?.data?.products;



  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  return (
    <section className="products-list">
    <div className="container">
    {products.map((product) => {
      return (
        <div className="card" key={product.id}>
          {product.discount > 0 && <span>discount</span>}
          <img src={product.image} alt={product.name} />
          <div className="product-name">{product.name}</div>
          <div className="product-price">
            <span className="current-price">{product.price}LE</span>
            {product.discount > 0 && (
              <span className="old-price">{product.old_price}LE</span>
            )}
          </div>
          <div className="action-buttons">
            <button className={`${product.in_favorites ? "fav":""}`}>
              <i className="fa-regular fa-heart"></i>
            </button>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <Link to={`/product_details/${product.id}`} className="more-info">
            More Info
          </Link>
        </div>
      );
    })}
  </div>
    </section>
  );
}

export default Products;
