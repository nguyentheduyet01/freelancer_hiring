import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getUserAction = createAsyncThunk("user/getUser", async (id) => {
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
