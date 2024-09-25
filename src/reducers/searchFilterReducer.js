import { createSlice } from "@reduxjs/toolkit";

// export const inputChangeAction = (input) => {
//   return {
//     type: "searchFilter/anecdoteSearched",
//     payload: {
//       searchQuery: input,
//     },
//   };
// };

// const searchFilterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "SEARCH_QUERY":
//       state = action.payload.searchQuery;
//     default:
//       return state;
//   }
// };

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState: "",
  reducers: {
    anecdoteSearched(state, action) {
      return action.payload;
    },
  },
});

export const { anecdoteSearched } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
