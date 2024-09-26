import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "../reducers/anecdoteReducer";
import searchFilterReducer from "../reducers/searchFilterReducer";
import notificationReducer from "../reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    searchFilter: searchFilterReducer,
    notifications: notificationReducer,
  },
});

export default store;
