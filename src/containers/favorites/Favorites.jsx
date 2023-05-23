import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./favorite.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavoriteProducts,
  getFavoriteProducts,
} from "../../redux/actions/favorite_action";

function Favorites() {
  // const [favorites, setFavorites] = useState([]);
  // const [total, setTotal] = useState(0);

  // const getFavoriteProducts = async()=> {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(
  //       "/api/favorites",
  //       {
  //         headers: {
  //           lang: "en",
  //           "Content-Type": "application/json",
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     setFavorites(response.data.data.data);
  //     console.log(response.data.data)
  //     setTotal(response.data.data.total)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorite);
  const favorites = favoriteProducts?.favorites?.data?.data?.data || [];
  const total = favoriteProducts?.favorites?.data?.data?.total;

  //
  // const deleteProduct = async (id) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.delete(
  //       `/api/favorites/${id}`,
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
  //     getFavoriteProducts();
  //   } catch (error) {
  //     toast.error("failed to delete product from favorites", {
  //       position: "bottom-left",
  //     });
  //   }
  // };

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);

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
              <button
                onClick={() =>
                  dispatch(deleteFavoriteProducts(fav.id)).then(
                    dispatch(getFavoriteProducts())
                  )
                }
              >
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
