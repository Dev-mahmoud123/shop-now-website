import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToFavorite, getAllProducts, getProductData } from "../actions/products_action";


const initialState = {
  productData: {},
  isLoading: true,
  error: null,
  selectedImage: null,
  selectedIndex: null,
  quantity: 1,
  allProducts:{}
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

    // use get all products 
    builder.addCase(getAllProducts.pending , (state)=>{
      state.isLoading = true;
    })
    builder.addCase(getAllProducts.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    builder.addCase(getAllProducts.rejected, (state,action)=> {
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
  getProducts
} = productSlice.actions;
export default productSlice.reducer;
