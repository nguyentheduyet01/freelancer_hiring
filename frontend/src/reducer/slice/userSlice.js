import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPostUserAction,
  getAllReceivedPostAction,
  getAllSkillUserAction,
  getAllUserAction,
  getFreelancerAction,
  getUserAction,
  statusUserAction,
  updateUserAction,
  userLogoutAction,
} from "../actions/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    users: [],
  },
  reducers: {
    clearMessage: (state, action) => {
      state.updateSuccess = false;
      state.statusChange = false;
    },
  },
  extraReducers: {
    [getUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.user = action.payload;
    },
    [getUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getFreelancerAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getFreelancerAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.freelancer = action.payload;
    },
    [getFreelancerAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.users = action.payload;
    },
    [getAllUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllSkillUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllSkillUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.skills = action.payload.data;
    },
    [getAllSkillUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [updateUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [updateUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.updateSuccess = true;
    },
    [updateUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllPostUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllPostUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getAllPostUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllReceivedPostAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllReceivedPostAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.received = action.payload;
    },
    [getAllReceivedPostAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [statusUserAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [statusUserAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.statusChange = true;
    },
    [statusUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
      state.statusChange = false;
    },
    [userLogoutAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [userLogoutAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.user = {};
    },
    [userLogoutAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

// const userSkills = (state,payload) =>{

// }

const userReducer = userSlice.reducer;
export const { clearMessage } = userSlice.actions;

export default userReducer;
