import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";

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
