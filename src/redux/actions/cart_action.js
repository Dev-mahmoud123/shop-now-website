import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";

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

