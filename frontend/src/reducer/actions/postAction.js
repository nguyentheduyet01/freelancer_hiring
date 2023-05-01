import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getAllPostAction = createAsyncThunk("post/getAllPost", async () => {
  const { data } = await axios.get("posts");
  return data;
});

export const getPostAction = createAsyncThunk("post/getAllPost", async () => {
  const { data } = await axios.get("posts");
  return data;
});

export const createPostAction = createAsyncThunk("post/createPost", async (post) => {
  const { data } = await axios.post("posts", post);
  return data;
});

export const updatePostAction = createAsyncThunk("post/updatePost", async (id, post) => {
  const { data } = await axios.put(`posts/${id}`, post);
  return data;
});

export const deletePostAction = createAsyncThunk("post/deletePost", async (id) => {
  const { data } = await axios.delete(`posts/${id}`);
  return data;
});