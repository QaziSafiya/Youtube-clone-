import { createSlice } from "@reduxjs/toolkit";

const Likes = createSlice({
  name: "thumb",
  initialState: {
    likes: ["1like"],
  },
  reducers: {
    addlikes: (state, action) => {
      state.likes.push(action.payload);
    },

    removelikes: (state, action) => {
      state.likes.pop();
    },
  },
});

export const { addlikes, removelikes } = Likes.actions;
export default Likes.reducer;
