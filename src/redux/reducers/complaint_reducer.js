import { createSlice } from "@reduxjs/toolkit";
import { sendCompliant } from "../actions/complaint_action";

const initialState = {
  complaints: null,
  isLoading: true,
  error: null,
};

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendCompliant.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendCompliant.fulfilled, (state, action) => {
      state.isLoading = false;
      state.complaint = action.payload;
    });
    builder.addCase(sendCompliant.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {sendYourComplaint} = complaintSlice.actions;
export default complaintSlice.reducer;