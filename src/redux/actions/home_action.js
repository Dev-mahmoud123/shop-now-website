import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  useGetDataWithLanguage,
  useGetDataWithoutHeaders,
} from "../../hooks/useGetData";

export const getBanner = createAsyncThunk("home/getBanner", async () => {
  try {
    const response = useGetDataWithoutHeaders("/api/banners");
    return response;
  } catch (error) {
    throw error.response;
  }
});

export const getCategory = createAsyncThunk(
  "home/getCategories",
  async () => {
    try {
      const response = useGetDataWithLanguage("/api/categories");
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);
