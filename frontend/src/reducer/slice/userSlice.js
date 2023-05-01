import { createSlice } from "@reduxjs/toolkit";
import { getUserAction } from "../actions/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
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
  },
});

const userReducer = userSlice.reducer;
// export const {  } = userSlice.actions;

export default userReducer;
