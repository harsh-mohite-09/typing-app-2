import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    words: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.words.push(action.payload);
    },
  },
});

export const { addItem } = appSlice.actions;

export default appSlice.reducer;
