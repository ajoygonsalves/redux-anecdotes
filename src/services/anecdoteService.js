import axios from "axios";
import { asObject } from "../reducers/anecdoteReducer";

const baseUrl = `http://localhost:3001/anecdotes`;

const getAll = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

const createAnecdote = async (text) => {
  try {
    const res = await axios.post(baseUrl, asObject(text));
    return res.data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export default { getAll, createAnecdote };
