import axios from "axios";
import React, { useEffect, useState } from "react";
import "./cart.scss";
import { toast } from "react-toastify";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartPrice, setCartPrice] = useState({});
  const [selectOption, setSelectOption] = useState("Free");

  const getCartProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/carts", {
        headers: {
          lang: "en",
          "Content-Type": "application/json",
          Authorization: token ?? "",
        },
      });
      const cartItemsWithQuantity = response.data.data.cart_items.map(
        (product) => ({
          ...product,
          quantity: product.quantity,
        })
      );
      setCartProducts(cartItemsWithQuantity);
      setCartPrice(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);
  //
  const increaseQuantity = (item_id) => {
    setCartProducts((prevProduct) =>
      prevProduct.map((product) =>
        product.id === item_id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  //
  const decreaseQuantity = (item_id) => {
    setCartProducts((prevProduct) =>
      prevProduct.map((product) =>
        product.id === item_id
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product
      )
    );
  };
  //
  const handleOptionChange = (event) => {
    setSelectOption(event.target.value);
  };
  //
  const deleteProduct = async (product_id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/carts",
        { product_id },
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
      getCartProducts();
    } catch (error) {
      toast.error("failed to delete product from favorites", {
        position: "bottom-left",
      });
    }
  };
  //
  return (
    <section className="cart_products">
      <div className="container">
        <div className="cart_header">
          <h2>My Cart</h2>
          <a href="/products">
            <i className="fa-solid fa-arrow-left-long fa-beat"></i> continue
            shopping
          </a>
        </div>
        <div className="cart_body">
          <div className="titles">
            <p>Product</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
          </div>
          {cartProducts.map((product) => {
            const {
              id,
              product: { name, image, price },
              quantity,
            } = product;
            return (
              <div className="cart_product" key={id}>
                <div className="description">
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
                <span>{product.product.price} EGP</span>
                <div className="quantity">
                  <button
                    className="btn-decrease"
                    onClick={() => decreaseQuantity(id)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="btn-increase"
                    onClick={() => increaseQuantity(id)}
                  >
                    +
                  </button>
                </div>
                <span>{quantity * price} EGP</span>
                <button
                  className="btn_delete"
                  onClick={() => {
                    deleteProduct(product.product.id);
                  }}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            );
          })}
        </div>
        <div className="cart_footer">
          <div className="shipping_mode">
            <h5>Choosing Shipping Mode:</h5>
            <div className="first_mode">
              <div className="radio-wrapper">
                <label className="radio-button">
                  <input
                    type="radio"
                    name="radio-group"
                    id="option1"
                    value="Free"
                    checked={selectOption === "Free"}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-checkmark"></span>
                  <span className="radio-label">Store Pickup</span>
                  <span>(in 20 min)</span>
                  <span className="service_type">. FREE</span>
                </label>
              </div>
            </div>
            <div className="second_mode">
              <div className="radio-wrapper">
                <label className="radio-button">
                  <input
                    type="radio"
                    name="radio-group"
                    id="option2"
                    value="9.09"
                    checked={selectOption === "9.09"}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-checkmark"></span>
                  <span className="radio-label">Delivery at home</span>
                  <span>(under 2 -4 day)</span>
                  <span className="service_type">. 9.09EGP</span>
                </label>
              </div>
            </div>
          </div>
          <div className="total_price">
            <div className="sub_total">
              <span>SUBTOTAL:</span>
              <span>{cartPrice.sub_total} EGP</span>
            </div>
            <div className="shipping">
              <span>SHIPPING:</span>
              <span>{selectOption}</span>
            </div>
            <div className="total">
              <span>TOTAL:</span>
              <span>
                {selectOption === "9.09"
                  ? cartPrice.total + Number(selectOption)
                  : cartPrice.total}{" "}
                EGP
              </span>
            </div>
            <button className="check">
              <span>checkout</span>
              <span>
                {selectOption === "9.09"
                  ? cartPrice.total + Number(selectOption)
                  : cartPrice.total}{" "}
                EGP
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
