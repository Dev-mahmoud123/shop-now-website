import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../products/product.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../redux/actions/home_action";


function CategoryProducts() {
  const { id } = useParams();
   console.log(id)
  // const [products, setProducts] = useState([]);

  // const getCategoryProducts =useCallback( async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(`/api/products?category_id=${id}`, {
  //       headers: {
  //         lang: "en",
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     });
  //     setProducts(response.data.data.data);
  //     console.log(response.data.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },[id]);

  const dispatch = useDispatch();
  const productState = useSelector((state)=> state.home.categoryProducts);
  const products = productState?.data?.data?.data || [];

  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [dispatch,id]);
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
                  <span className="old-price">{product.old_price}EGP</span>
                )}
              </div>
              <div className="action-buttons">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
                <Link to={`/product_details/${product.id}`} className = "more-info">More Info</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryProducts;
