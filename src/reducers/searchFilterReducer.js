export const inputChangeAction = (input) => {
  return {
    type: "SEARCH_QUERY",
    payload: {
      searchQuery: input,
    },
  };
};

const searchFilterReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      state = action.payload.searchQuery;
    default:
      return state;
  }
};

export default searchFilterReducer;
