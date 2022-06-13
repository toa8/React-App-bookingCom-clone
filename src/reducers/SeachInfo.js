import { createSlice } from "@reduxjs/toolkit";

export const searchReducer = createSlice({
  name: "searchReducer",
  initialState: [],
  reducers: {
    holdInfo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default searchReducer.reducer;

export const { holdInfo } = searchReducer.actions;
