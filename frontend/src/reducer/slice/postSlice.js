import { createSlice } from "@reduxjs/toolkit";
import { getAllPostAction, getPostAction } from "../actions/postAction";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [getPostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getPostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.post = action.payload;
    },
    [getPostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllPostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllPostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getAllPostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const postReducer = postSlice.reducer;
// export const {  } = postSlice.actions;

export default postReducer;
