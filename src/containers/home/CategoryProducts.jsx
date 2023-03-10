import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../products/product.scss"

function CategoryProducts() {
  const {id}= useParams();
  const [products ,setProducts] = useState([]);

  const getCategoryProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `/api/products?category_id=${id}`,
        {
          headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setProducts(response.data.data.data);
      console.log(response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=> {
    getCategoryProducts();
  },[id])
  return (
    <section className='products-list'>
  
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
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </section>
  )
}

export default CategoryProducts