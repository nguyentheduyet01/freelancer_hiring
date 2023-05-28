import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/instance";

export const getAllSkillAction = createAsyncThunk("skill/getAllSkill", async () => {
  const { data } = await axios.get(`skills`);
  return data;
});

export const getSkillAction = createAsyncThunk("skill/getSkill", async () => {
  const { data } = await axios.get("Skills");
  return data;
});

export const createSkillAction = createAsyncThunk("skill/createSkill", async (skill) => {
  const { data } = await axios.post("Skills", skill);
  return data;
});

export const updateSkillAction = createAsyncThunk("skill/updateSkill", async (id, skill) => {
  const { data } = await axios.put(`skills/${id}`, skill);
  return data;
});

export const deleteSkillAction = createAsyncThunk("skill/deleteSkill", async (id) => {
  const { data } = await axios.delete(`skills/${id}`);
  return data;
});
