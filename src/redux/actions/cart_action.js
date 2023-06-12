import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { usePostDataWithToken } from "../../hooks/usePostData";

export const getCartProducts = createAsyncThunk(
  "cart/getCartProduct",
  async () => {
    try {
      const response = await useGetData("/api/carts");
      // console.log(response);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);

export const deleteCartProducts = createAsyncThunk(
  "cart/deleteCartProduct",
  async (product_id) => {
    try {
      const response = await useDeleteData(`/api/carts/${product_id}`);
      console.log(product_id)
      console.log(response)
      return response;
    } catch (error) {
      throw error.response.message;
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
