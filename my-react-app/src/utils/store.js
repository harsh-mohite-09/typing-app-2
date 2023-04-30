import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import testconfigSlice from "./testconfigSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    testConfig: testconfigSlice,
    user: userSlice,
  },
});

export default store;
