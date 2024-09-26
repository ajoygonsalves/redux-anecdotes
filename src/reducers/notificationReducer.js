import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

let timeoutId = null;

export const setNotification = createAsyncThunk(
  "notification/notify",
  async ({ content, time }, { dispatch }) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    dispatch(setNotificationContent(content));
    timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, time);
  }
);

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotificationContent(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return null;
    },
  },
});

export default notificationSlice.reducer;
export const { notificationSet, notificationRemoved } =
  notificationSlice.actions;
