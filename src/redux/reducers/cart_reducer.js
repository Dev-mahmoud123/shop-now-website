import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts } from "../actions/cart_action";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
  error: null,
  isLoading: true,
  deliveryOption: "free",
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
      const itemIndex = cartItems.findIndex(
        (item) => item.id === productId
      );

      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartProducts.data.data.cart_items;
      const itemIndex = cartItems.findIndex(
        (item) => item.id === productId
      );

      if (itemIndex !== -1 && cartItems[itemIndex].quantity >1) {
           cartItems[itemIndex].quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartProducts = action.payload;
        // state.totalPrice = calculateTotalPrice(action.payload)
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
// const calculateTotalPrice = (items) => {
//   return items.reduce((total, item) => total + item.price * item.quantity, 0);
// };
export const {
  getCartsProducts,
  setDeliveryOption,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
