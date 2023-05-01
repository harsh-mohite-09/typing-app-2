import { createSlice } from "@reduxjs/toolkit";
import { getWordsByMode } from "./helper";
import { WORDS } from "./config";

const appSlice = createSlice({
  name: "app",
  initialState: {
    words: WORDS,
    modeWords: getWordsByMode("time", 15, WORDS),
    timeEnd: false,
    showScore: false,
    timerId: -1,
  },
  reducers: {
    loadWords: (state, action) => {
      state.words = action.payload;
    },
    setModeWords: (state, action) => {
      const { mode, value } = action.payload;
      state.modeWords = getWordsByMode(mode, value, state.words);
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    setTimeEnd: (state) => {
      state.timeEnd = true;
    },
    resetApp: (state) => {
      state.timeEnd = false;
    },
    setShowScore: (state) => {
      state.showScore = true;
    },
    resetShowScore: (state) => {
      state.showScore = false;
    },
    clearMarkings: () => {
      console.log("clear markings");
      // const words = document.querySelector(".words-container");
      // for (let i = 0; i < words.children.length; i++) {
      //   for (let j = 0; j < words.children[i].length; j++) {
      //     words.children[i].children[j].classList.remove("correct");
      //     words.children[i].children[j].classList.remove("wrong-letter");
      //   }
      // }
    },
    setTimerId: (state, action) => {
      state.timerId = action.payload;
    },
    clearTimer: (state) => {
      console.log("timeout cleared");
      clearTimeout(state.timerId);
    },
  },
});

export const {
  loadWords,
  setModeWords,
  setStartTime,
  setEndTime,
  resetApp,
  setShowScore,
  resetShowScore,
  clearMarkings,
  setTimerId,
  clearTimer,
} = appSlice.actions;

export default appSlice.reducer;
