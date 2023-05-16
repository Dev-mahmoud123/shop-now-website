import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToFavorite, getProductData } from "../actions/products_action";


const initialState = {
  productData: {},
  isLoading: true,
  error: null,
  selectedImage: null,
  selectedIndex: null,
  quantity: 1,
  favorites: [],
  carts: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      if(state.quantity > 1){
            state.quantity -=1
      }
    },
  },
  extraReducers: (builder) => {
    // use get product details action
    builder.addCase(getProductData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    });
    builder.addCase(getProductData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // use add product to favorites action
    builder.addCase(addToFavorite.pending, (state)=> {
      state.isLoading = true;
    })
    builder.addCase(addToFavorite.fulfilled , (state,action)=> {
      state.isLoading = false;
      state.favoriteStatus.push(action.payload);
    })
    builder.addCase(addToFavorite.rejected , (state , action)=> {
      state.isLoading = false;
      state.error = action.payload;
    })
    // use add product to cart action
    builder.addCase(addToCart.pending , (state)=> {
      state.isLoading = true;
    })
    builder.addCase(addToCart.fulfilled , (state,action)=> {
      state.isLoading = false;
      state.carts.push(action.payload);
    })
    builder.addCase(addToCart.rejected , (state,action)=> {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});

export const {
  getProductDetails,
  setSelectedImage,
  setSelectedIndex,
  increaseQuantity,
  decreaseQuantity,
  addProductToFavorite,
} = productSlice.actions;
export default productSlice.reducer;
