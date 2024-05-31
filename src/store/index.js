import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../modules/HomePage/slice/imageSlice";

const store = configureStore({
  reducer: {
    Images: imageSlice,
  },
  devTools: true,
});

export default store;
