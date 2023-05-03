import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const loginAction = createAsyncThunk("account/login", async (account) => {
  const { data } = await axios.post("authentication/login", account);
  localStorage.setItem("account", JSON.stringify(data));
  return data;
});

export const logoutAction = createAsyncThunk("account/action", async () => {
  localStorage.setItem("account", JSON.stringify(""));
});
