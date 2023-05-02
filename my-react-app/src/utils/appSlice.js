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
    gameStart: false,
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
    setTimerId: (state, action) => {
      state.timerId = action.payload;
    },
    clearTimer: (state) => {
      console.log("timeout cleared");
      clearTimeout(state.timerId);
    },
    setGameStart: (state) => {
      state.gameStart = true;
    },
    resetGame: (state) => {
      state.gameStart = false;
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
  setTimerId,
  clearTimer,
  setGameStart,
  resetGame,
} = appSlice.actions;

export default appSlice.reducer;
