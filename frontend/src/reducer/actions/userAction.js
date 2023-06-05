import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getUserAction = createAsyncThunk("user/getUser", async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
});

export const getFreelancerAction = createAsyncThunk("user/Freelancer", async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
});

export const getAllUserAction = createAsyncThunk(
  "user/getAllUser",
  async ({ pagesize = 5, pageindex = 1 }) => {
    const { data } = await axios.get(`users?pagesize=${pagesize}&pageindex=${pageindex}`);
    return data;
  },
);

export const createUserAction = createAsyncThunk("user/createUser", async (user) => {
  const { data } = await axios.post("users", user);
  return data;
});

export const updateUserAction = createAsyncThunk("user/updateUser", async ({ id, user }) => {
  const { data } = await axios.put(`users/${id}`, user);
  return data;
});

export const deleteUserAction = createAsyncThunk("user/deleteUser", async (id) => {
  const { data } = await axios.delete(`users/${id}`);
  return data;
});

export const getAllSkillUserAction = createAsyncThunk("user/skill", async (id) => {
  const { data } = await axios.get(`users/${id}/skill`);
  return data;
});

export const getAllPostUserAction = createAsyncThunk(
  "user/posts",
  async (id, { pagesize = 5, pageindex = 1 }) => {
    const { data } = await axios.get(
      `users/${id}/posts?pagesize=${pagesize}&pageindex=${pageindex}`,
    );
    return data;
  },
);

export const getAllReceivedPostAction = createAsyncThunk(
  "user/receive",
  async (id, { pagesize = 5, pageindex = 1 }) => {
    const { data } = await axios.get(
      `users/${id}/received?pagesize=${pagesize}&pageindex=${pageindex}`,
    );
    return data;
  },
);

export const statusUserAction = createAsyncThunk("user/statusUser", async ({ idUser, status }) => {
  const { data } = await axios.get(`users/changestatus?idUser=${idUser}&status=${status}`);
  return data;
});

export const userLogoutAction = createAsyncThunk("user/logout", async () => {
  localStorage.setItem("account", JSON.stringify(""));
});

export const uploadACtion = createAsyncThunk("user/upload", async (upload) => {
  const { data } = await axios.post("filedatas/upload", upload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
});
