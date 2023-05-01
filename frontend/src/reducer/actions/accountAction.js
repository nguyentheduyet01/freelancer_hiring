import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const loginAction = createAsyncThunk("account/login", async (account) => {
  const data = await axios.post("authentication/login", account);
  return data;
});
