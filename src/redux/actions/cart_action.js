import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import axios from "axios";
import useDeleteData from "../../hooks/useDeleteData";

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
