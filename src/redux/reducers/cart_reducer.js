import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteCartProducts,
  getCartProducts,
} from "../actions/cart_action";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
  error: null,
  isLoading: true,
  deliveryOption: "free",
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDeliveryOption: (state, action) => {
      state.deliveryOption = action.payload;
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartProducts.data.data.cart_items;
      const cartItem = cartItems.find((item) => item.id === productId);
      cartItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartProducts.data.data.cart_items;
      const cartItem = cartItems.find((item) => item.id === productId);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    // use add product to cart action
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartProducts.push(action.payload);
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartProducts = action.payload;
        let amount = 0;
        let quantity = 0; 
        console.log(state.cartProducts?.data)
        const cartItems = state.cartProducts?.data?.data?.cart_items;
        cartItems.forEach((item) => {
          quantity += item.quantity;
          console.log(quantity);
          amount += item.product.price * item.quantity;
        });
  
        state.cartTotalAmount = amount;
        console.log(state.cartTotalAmount);
        state.cartTotalQuantity = quantity;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //
    builder
      .addCase(deleteCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartProducts = action.payload;
      })
      .addCase(deleteCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addProductToCart,
  getCartsProducts,
  setDeliveryOption,
  increaseQuantity,
  decreaseQuantity,
  deleteCartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
