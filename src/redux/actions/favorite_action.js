import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { toast } from "react-toastify";
import { usePostDataWithToken } from "../../hooks/usePostData";

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

export const getFavoriteProducts = createAsyncThunk(
  "favorite/getFavoriteProduct",
  async () => {
    try {
      const response = await useGetData("/api/favorites");
      console.log(response);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);

export const deleteFavoriteProducts = createAsyncThunk(
  "favorite/deleteFavoriteProduct",
  async (id) => {
      try {
            const response = await useDeleteData(`/api/favorites/${id}`);
            return response;
      } catch (error) {
            throw error.response;
      }
  }
);
