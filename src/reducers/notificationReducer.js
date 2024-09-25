import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    notificationSet(state, action) {
      const { type, message } = action.payload;
      switch (type) {
        case "VOTE":
          return `You voted ${message}`;
        case "CREATE_ANECDOTE":
          return `You created the anecdote: ${message}`;
        default:
          return state;
      }
    },
    notificationRemoved(state, action) {
      return "";
    },
  },
});

export default notificationSlice.reducer;
export const { notificationSet, notificationRemoved } =
  notificationSlice.actions;
