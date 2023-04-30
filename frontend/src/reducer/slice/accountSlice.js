import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../actions/accountAction";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: [],
    token: "",
  },
  reducers: {},
  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.data = action.data;
    },
    [loginAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const accountReducer = accountSlice.reducer;
export const { login, logout } = accountSlice.actions;

export default accountReducer;