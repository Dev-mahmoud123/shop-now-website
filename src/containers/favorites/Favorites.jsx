import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favorite.scss";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);

  const getFavoriteProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/favorites", {
        headers: {
          lang: "en",
          "Content-Type": "application/json",
          Authorization: token ?? "",
        },
      });
      setFavorites(response.data.data.data);
      setTotal(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `/api/favorites/${id}`,
        {
          headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      toast.success(response.data.message, {
        position: "bottom-right",
      });
      getFavoriteProducts();
    } catch (error) {
      toast.error("failed to delete product from favorites", {
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    getFavoriteProducts();
  }, []);

  return (
    <section className="favorite_products">
    <h5>Total Products : {total}</h5>
      <div className="container">
        {favorites.map((fav) => {
          return (
            <div className="card" key={fav.product.id}>
              <img src={fav.product.image} alt={fav.product.name} />
              <div className="product-name">{fav.product.name}</div>
              <div className="product-price">
                <span className="current-price">{fav.product.price}LE</span>
                {fav.product.discount > 0 && (
                  <span className="old-price">{fav.product.old_price}LE</span>
                )}
              </div>
              <button onClick={() => deleteProduct(fav.id)}>
                <i className="fa-regular fa-trash-can"></i>
              </button>
              <Link
                to={`/product_details/${fav.product.id}`}
                className="more-info"
              >
                More Info
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Favorites;
