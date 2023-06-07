import { createSlice } from "@reduxjs/toolkit";
import { deleteCartProducts, getCartProducts } from "../actions/cart_action";

const initialState = {
  cartProducts: {},
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
      const itemIndex = cartItems.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity += 1;
        
      }

    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartProducts.data.data.cart_items;
      console.log(cartItems);
      const itemIndex = cartItems.findIndex((item) => item.id === productId);

      if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
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
        const cartItems = state.cartProducts?.data?.data?.cart_items;
        let amount = 0;
        let quantity = 0;
        console.log(cartItems);
        cartItems.forEach((item) => {
          quantity += item.quantity ;
          console.log(quantity)
          amount += item.product.price * item.quantity;
          console.log(item)
        });

        state.cartTotalAmount = amount;
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
  getCartsProducts,
  setDeliveryOption,
  increaseQuantity,
  decreaseQuantity,
  deleteCartProduct,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
