import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInput: [],
    currentInput: "",
    errorCount: 0,
  },
  reducers: {
    addLetter: (state, action) => {
      if (action.payload.length === 1 && action.payload !== " ") {
        state.userInput = [...state.userInput, action.payload];
        state.currentInput += action.payload;
      } else if (
        action.payload === "Backspace" &&
        state.userInput.at(-1) !== " "
      ) {
        state.userInput.pop();
        state.currentInput = state.currentInput.slice(0, -1);
      } else if (action.payload === " ") {
        if (state.userInput.at(-1) !== " " && state.userInput.length > 0) {
          state.userInput = [...state.userInput, action.payload];
          state.currentInput = "";
          // console.log("current cleared");
        }
      }
    },
    resetAll: (state) => {
      state.userInput = [];
      state.currentInput = "";
    },
  },
});

export const { addLetter, resetAll } = userSlice.actions;

export default userSlice.reducer;
