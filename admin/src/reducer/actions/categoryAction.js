import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getCategoryAction = createAsyncThunk("Category/getCategory", async (id) => {
  const { data } = await axios.get(`categories/${id}`);
  return data;
});

export const getCategoriesAction = createAsyncThunk("Category/getCategories", async () => {
  const { data } = await axios.get("categories");
  return data;
});

export const createCategoryAction = createAsyncThunk(
  "Category/createCategory",
  async (category) => {
    const { data } = await axios.post("categories", category);
    return data;
  },
);

export const updateCategoryAction = createAsyncThunk(
  "Category/updateCategory",
  async (id, category) => {
    const { data } = await axios.put(`categories/${id}`, category);
    return data;
  },
);

export const deleteCategoryAction = createAsyncThunk("Category/deleteCategory", async (id) => {
  const { data } = await axios.delete(`categories/${id}`);
  return data;
});
