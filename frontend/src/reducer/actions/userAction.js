import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getUserAction = createAsyncThunk("user/getUser", async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
});

export const getUserAllAction = createAsyncThunk("user/getAllUser", async (account) => {
  const { data } = await axios.post("authentication/login", account);
  return data;
});
