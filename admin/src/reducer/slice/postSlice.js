import { createSlice } from "@reduxjs/toolkit";
import {
  applyAction,
  approvePostAction,
  createPostAction,
  getAllNotApprovePostAction,
  getAllPostAction,
  getPostAction,
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
      state.approveSuccess = false;
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
    [getAllNotApprovePostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllNotApprovePostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.notApprove = action.payload;
    },
    [getAllNotApprovePostAction.rejected]: (state, action) => {
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
    [approvePostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [approvePostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.approveSuccess = true;
    },
    [approvePostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const postReducer = postSlice.reducer;
export const { clearMessage } = postSlice.actions;

export default postReducer;
