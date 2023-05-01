import { createSlice } from "@reduxjs/toolkit";
import { getAllUserAction, getUserAction } from "../actions/userAction";

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
  },
});

const userReducer = userSlice.reducer;
// export const {  } = userSlice.actions;

export default userReducer;
