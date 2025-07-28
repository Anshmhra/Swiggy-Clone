// src/Redux/getSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const getSlice = createSlice({
  name: "get",
  initialState: {
    data: [],
  },
  reducers: {
    setGet: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setGet } = getSlice.actions;
export default getSlice.reducer;
