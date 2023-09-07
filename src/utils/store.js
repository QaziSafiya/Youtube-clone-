import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import Chatslice from "./Chatslice";
import Likes from "./Likes";
const store = configureStore({
  reducer: {
    app: appSlice,
    chat: Chatslice,
    like: Likes,
  },
});
export default store;
