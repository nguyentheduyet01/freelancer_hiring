import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import categoryReducer from "./slice/categorySlice";
import postReducer from "./slice/postSlice";
import SkillReducer from "./slice/skillSlice";
import userReducer from "./slice/userSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
  post: postReducer,
  category: categoryReducer,
  skill: SkillReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
