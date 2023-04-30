import { createSlice } from "@reduxjs/toolkit";

const testconfigSlice = createSlice({
  name: "testConfig",
  initialState: {
    mode: "time",
    value: 15,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      state.value = action.payload === "time" ? 15 : 10;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMode, setValue, setAgain } = testconfigSlice.actions;

export default testconfigSlice.reducer;
