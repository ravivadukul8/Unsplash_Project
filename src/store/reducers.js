import { combineReducers } from "@reduxjs/toolkit";
import imageSlice from "../modules/HomePage/slice/imageSlice";

const reducer = combineReducers({
  Images: imageSlice,
});
export default reducer;
