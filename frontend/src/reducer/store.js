import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
