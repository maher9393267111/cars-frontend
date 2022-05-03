import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";
//import postSlice from "./features/post/postSlice";

export default configureStore({
  reducer: {
    car: carSlice,
   // post: postSlice,
  },
});