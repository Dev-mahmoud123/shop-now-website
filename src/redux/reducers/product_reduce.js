import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToFavorite, getAllProducts, getProductData } from "../actions/products_action";


const initialState = {
  productData: {},
  isLoading: true,
  error: null,
  selectedImage: null,
  selectedIndex: null,
  quantity: 1,
  favorites: [],
  carts: [],
  inCart:false,
  inFavorite: false,
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
    // use add product to favorites action
    builder.addCase(addToFavorite.pending, (state)=> {
      state.isLoading = true;
      state.inFavorite = false;
    })
    builder.addCase(addToFavorite.fulfilled , (state,action)=> {
      state.isLoading = false;
      state.favorites.push(action.payload);
      state.inFavorite = true;
    })
    builder.addCase(addToFavorite.rejected , (state , action)=> {
      state.isLoading = false;
      state.error = action.payload;
      state.inFavorite = false;
    })
    // use add product to cart action
    builder.addCase(addToCart.pending , (state)=> {
      state.isLoading = true;
      state.inCart = false;
    })
    builder.addCase(addToCart.fulfilled , (state,action)=> {
      state.isLoading = false;
      state.carts.push(action.payload);
      state.inCart = true;
    })
    builder.addCase(addToCart.rejected , (state,action)=> {
      state.isLoading = false;
      state.error = action.payload;
      state.inCart = false;
    })
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
  addProductToFavorite,
  getProducts
} = productSlice.actions;
export default productSlice.reducer;
