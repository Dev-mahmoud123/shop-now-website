import useGetData from "../../hooks/useGetData";
import { usePostData } from "/../src/hooks/usePostData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewUser = createAsyncThunk(
  "user/createNewUser",
  async (formData) => {
    try {
      const response = await usePostData("/api/register", formData);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData) => {
    try {
      const response = await usePostData("/api/login", formData);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);
export const getLoggedUser = createAsyncThunk(
  "user/getLoggedUser",
  async () => {
    try {
      const response = await useGetData("/api/profile");
      return response;
    } catch (error) {
      throw error.response;
    }
  }
);


