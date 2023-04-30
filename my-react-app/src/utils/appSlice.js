import { createSlice } from "@reduxjs/toolkit";
import { getWordsByMode } from "./helper";

const appSlice = createSlice({
  name: "app",
  initialState: {
    words: [],
    modeWords: [],
  },
  reducers: {
    loadWords: (state, action) => {
      state.words = action.payload;
    },
    setModeWords: (state, action) => {
      const { mode, value } = action.payload;
      state.modeWords = getWordsByMode(mode, value, state.words);
    },
  },
});

export const { loadWords, setModeWords } = appSlice.actions;

export default appSlice.reducer;
