import { createSlice } from "@reduxjs/toolkit";
import {
  applyAction,
  createPostAction,
  getAllPostAction,
  getPostAction,
  getUserApplyPostAction,
} from "../actions/postAction";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    posts: [],
    applied: [],
  },
  reducers: {
    clearMessage: (state, action) => {
      state.error = false;
      state.success = false;
      state.applySuccess = false;
    },
  },
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
    [createPostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [createPostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.success = true;
      state.newPost = action.payload;
    },
    [createPostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [applyAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [applyAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.applySuccess = true;
      state.applied = action.payload;
    },
    [applyAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getUserApplyPostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getUserApplyPostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.user = action.payload;
    },
    [getUserApplyPostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const postReducer = postSlice.reducer;
export const { clearMessage } = postSlice.actions;

export default postReducer;
