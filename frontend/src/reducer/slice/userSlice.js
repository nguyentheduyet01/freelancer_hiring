import { createSlice } from "@reduxjs/toolkit";
import {
  getAllSkillUserAction,
  getAllUserAction,
  getUserAction,
  updateUserAction,
} from "../actions/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    users: [],
  },
  reducers: {},
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
      state.success = true;
    },
    [updateUserAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

// const userSkills = (state,payload) =>{

// }

const userReducer = userSlice.reducer;
// export const {  } = userSlice.actions;

export default userReducer;
