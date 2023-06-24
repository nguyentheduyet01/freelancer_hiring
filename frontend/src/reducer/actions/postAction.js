import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getAllPostAction = createAsyncThunk(
  "post/getAllPost",
  async (input = { pagesize: 5, pageindex: 1 }) => {
    // let newInput;
    // if (input.address !== "" && input.search === "") {
    //   newInput = {
    //     pagesize: input.pagesize,
    //     pageindex: input.pageindex,
    //     address: input.address,
    //   };
    //   const { data } = await axios.post(`posts/search`, newInput);
    //   newInput = data;
    // } else if (input.search !== "" && input.address === "") {
    //   newInput = {
    //     pagesize: input.pagesize,
    //     pageindex: input.pageindex,
    //     search: input.search,
    //   };
    //   const { data } = await axios.post(`posts/search`, newInput);
    //   newInput = data;
    // } else {
    //   const { data } = await axios.post(`posts/search`, input);
    //   newInput = data;
    // }
    // return newInput;
    const { data } = await axios.post(`posts/search`, input);
    return data;
  }
);

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

export const updatePostAction = createAsyncThunk("post/updatePost", async (id, post) => {
  const { data } = await axios.put(`posts/${id}`, post);
  return data;
});

export const deletePostAction = createAsyncThunk("post/deletePost", async (id) => {
  const { data } = await axios.delete(`posts/${id}`);
  return data;
});
export const getUserApplyPostAction = createAsyncThunk("post/userPost", async (id) => {
  const { data } = await axios.get(`posts/${id}/users`);
  return data;
});

export const applyAction = createAsyncThunk("post/apply", async ({ apply, cvId }) => {
  const newApply = {
    ...apply,
    cvId: cvId,
  };
  console.log(newApply);
  const { data } = await axios.post(`posts/apply`, newApply);
  return data;
});

// "category": 0,
//   "paymentMethod": 0,
//   "workingMethod": 0,
//   "skill": 0,
