import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInput: [],
    currentInput: null,
    errorCount: 0,
  },
  reducers: {
    addLetter: (state, action) => {
      if (action.payload.length === 1) {
        state.userInput = [...state.userInput, action.payload];
        state.currentInput = state.currentInput
          ? [...state.currentInput, action.payload]
          : [action.payload];
      } else if (
        action.payload === "Backspace" &&
        state.userInput.at(-1) !== " "
      ) {
        state.userInput.pop();
        state.currentInput.pop();
      }
      if (action.payload === " ") {
        state.currentInput = null;
      }
    },
  },
});

export const { addLetter } = userSlice.actions;

export default userSlice.reducer;
