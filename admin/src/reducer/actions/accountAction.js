import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const registerAction = createAsyncThunk("account/register", async (account) => {
  const { data } = await axios.post("authentication/login", account);
  localStorage.setItem("account", JSON.stringify(data));
  return data;
});

export const loginAction = createAsyncThunk("account/login", async (account) => {
  const { data } = await axios.post("authentication/adminlogin", account);
  localStorage.setItem("account", JSON.stringify(data));
  return data;
});

export const logoutAction = createAsyncThunk("account/logout", async () => {
  localStorage.setItem("account", JSON.stringify(""));
});

export const changPassAction = createAsyncThunk("account/password", async ({ id, pass }) => {
  console.log(pass);
  try {
    const { data } = await axios.put(`authentication/changepassword?id=${id}`, pass);
    return data;
  } catch (e) {
    return e.response.data.message;
  }
});
