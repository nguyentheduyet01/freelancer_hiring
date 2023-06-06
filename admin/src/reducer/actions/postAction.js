import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getAllPostAction = createAsyncThunk(
  "post/getAllPost",
  async (input = { pagesize: 20, pageindex: 1 }) => {
    const { data } = await axios.post(`posts/search`, input);
    return data;
  },
);
// Posts/notapprove
export const getAllNotApprovePostAction = createAsyncThunk("post/notapprove", async () => {
  const { data } = await axios.get(`posts/notapprove`);
  return data;
});

export const getPostAction = createAsyncThunk("post/getPost", async (id) => {
  const { data } = await axios.get(`posts/${id}`);
  const { data: dataUser } = await axios.get(`users/${data.createdBy}`);
  const newData = {
    ...data,
    name: dataUser?.name,
  };
  return newData;
});

export const createPostAction = createAsyncThunk("post/createPost", async (post) => {
  const { data } = await axios.post("posts", post);
  return data;
});

export const updatePostAction = createAsyncThunk("post/updatePost", async ({ id, post }) => {
  const { data } = await axios.put(`posts/${id}`, post);
  return data;
});

export const approvePostAction = createAsyncThunk("post/updatePost", async (id) => {
  const { data } = await axios.get(`posts/approve?id=${id}`);
  return data;
});

export const deletePostAction = createAsyncThunk("post/deletePost", async (id) => {
  const { data } = await axios.delete(`posts/${id}`);
  return data;
});

export const applyAction = createAsyncThunk("post/apply", async (apply) => {
  const { data } = await axios.post(`posts/apply`, apply);
  return data;
});
