import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";
import { combineReducers } from "redux";
import searchFilterReducer from "./reducers/searchFilterReducer";

const reducer = combineReducers({
  searchFilter: searchFilterReducer,
  anecdotes: anecdoteReducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
