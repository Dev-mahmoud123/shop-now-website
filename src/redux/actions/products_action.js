import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData, useGetDataWithLanguage } from "../../hooks/useGetData";
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



