import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData, useGetDataWithLanguage } from "../../hooks/useGetData";
import { usePostDataWithToken } from "../../hooks/usePostData";
import { toast } from "react-toastify";

// function to get all products from home endpoint 
export const getAllProducts = createAsyncThunk('product/getAllProducts' , async()=>{
       try {
            const response = await useGetDataWithLanguage('/api/home');
            return response ;
       } catch (error) {
           throw error.response;
       }
})

// function to get product details from api
export const getProductData = createAsyncThunk(
  "product/getProductData",
  async (id) => {
    try {
      const response = await useGetData(`/api/products/${id}`);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);

// function to add product to favorite products
export const addToFavorite = createAsyncThunk(
  "product/addToFavorite",
  async (product_id) => {
    try {
      const response = await usePostDataWithToken(`/api/favorites`, {
        product_id,
      });
      console.log(response);
      toast.success(response.data.message, {
        position: "bottom-right",
      });
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      throw error.response;
    }
  }
);

// function to add product to cart
export const addToCart = createAsyncThunk(
  "product/addToCart",
  async (product_id) => {
    try {
      const response = await usePostDataWithToken("/api/carts", { product_id });
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);
