import { createAsyncThunk } from "@reduxjs/toolkit";
import { usePostData } from "../../hooks/usePostData";
import { toast } from "react-toastify";

export const sendCompliant = createAsyncThunk(
  "complaint/sendComplaint",
  async (formData) => {
    try {
      const response = await usePostData("/api/complaints", formData);
      toast.success(response.data.message, {
        position: "bottom-right",
      });
      return response;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-left",
      });
      throw error.response;
    }
  }
);
