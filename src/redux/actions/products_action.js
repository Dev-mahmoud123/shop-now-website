import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import { usePostDataWithToken } from "../../hooks/usePostData";
import { toast } from "react-toastify";

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

export const addToFavorite = createAsyncThunk(
  "product/addToFavorite",
  async (product_id) => {
    try {
      const response = await usePostDataWithToken(`/api/favorites`, {product_id});
      console.log(response)
      toast.success(response.data.message, {
                  position: "bottom-right",
                });
      return response;
    } catch (error) {
      toast.error(error.response.data.message)
      throw error.response;
    }
  }
);
