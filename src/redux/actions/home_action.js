import { createAsyncThunk } from "@reduxjs/toolkit";
import {
      useGetData,
  useGetDataWithLanguage,
  useGetDataWithoutHeaders,
} from "../../hooks/useGetData";
// import axios from "axios";

export const getBanner = createAsyncThunk("home/getBanner", async () => {
  try {
    const response = useGetDataWithoutHeaders("/api/banners");
    return response;
  } catch (error) {
    throw error.response;
  }
});

export const getCategory = createAsyncThunk("home/getCategories", async () => {
  try {
    const response = useGetDataWithLanguage("/api/categories");
    return response;
  } catch (error) {
    throw error.response;
  }
});

export const getProductsByCategory = createAsyncThunk(
  "home/getProductsByCategory",
  async (id) => {
      try {
            const response  = useGetData(`/api/products?category_id=${id}`);
            console.log(response);
            return response;
      } catch (error) {
           throw error.response; 
      }
  }
);


// export const getProductsByCategory = createAsyncThunk("home/getProductsByCategory" , async(id)=> {
//   try {
//     const response  = useGetData(`/api/products?category_id=${id}`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     throw error.response;
//   }
// })