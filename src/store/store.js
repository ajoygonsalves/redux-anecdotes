import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "../reducers/anecdoteReducer";
import searchFilterReducer from "../reducers/searchFilterReducer";

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    searchFilter: searchFilterReducer,
  },
});
