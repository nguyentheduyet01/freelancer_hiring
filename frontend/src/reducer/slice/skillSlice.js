import { createSlice } from "@reduxjs/toolkit";
import { getAllSkillAction, getSkillAction } from "../actions/skillAction";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skill: {},
    skills: [],
  },
  reducers: {},
  extraReducers: {
    [getSkillAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getSkillAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.skill = action.payload;
    },
    [getSkillAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
    [getAllSkillAction.pending]: (state, action) => {
      state.isLoad = true;
      state.error = false;
    },
    [getAllSkillAction.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.error = false;
      state.skills = action.payload;
    },
    [getAllSkillAction.rejected]: (state, action) => {
      state.isLoad = false;
      state.error = true;
    },
  },
});

const SkillReducer = skillSlice.reducer;
// export const {  } = SkillSlice.actions;

export default SkillReducer;
