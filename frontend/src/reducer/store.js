import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import userReducer from "./slice/userSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
