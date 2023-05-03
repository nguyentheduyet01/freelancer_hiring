import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAction, getCategoryAction } from "../actions/categoryAction";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: {},
    categories: [],
  },
  reducers: {},
  extraReducers: {
    [getCategoryAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getCategoryAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.Category = action.payload;
    },
    [getCategoryAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getCategoriesAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getCategoriesAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.Categories = action.payload;
    },
    [getCategoriesAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const categoryReducer = categorySlice.reducer;
// export const {  } = categorySlice.actions;

export default categoryReducer;
