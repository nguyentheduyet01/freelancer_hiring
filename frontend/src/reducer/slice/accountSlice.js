import { createSlice } from "@reduxjs/toolkit";
import { changPassAction, loginAction, logoutAction } from "../actions/accountAction";

const initialState = {
  account: localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : {},
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.account = action.payload;
    },
    [loginAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [logoutAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [logoutAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.account = {};
    },
    [logoutAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
      state.message = action.payload;
    },
    [changPassAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [changPassAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.changeSuccess = true;
    },
    [changPassAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

const accountReducer = accountSlice.reducer;
export const { login, logout } = accountSlice.actions;

export default accountReducer;
