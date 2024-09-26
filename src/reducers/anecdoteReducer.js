import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, current } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

// const initialState = anecdotesAtStart.map(asObject);

export const getAllAnecdotes = createAsyncThunk(
  "anecdote/getAllAnecdotes",
  async () => {
    return await anecdoteService.getAll();
  }
);

export const createAnecdote = createAsyncThunk(
  "anecdote/createAnecdote",
  async (text) => {
    return anecdoteService.createAnecdote(text);
  }
);

export const voteAnecdote = createAsyncThunk(
  "anecdote/voteAnecdote",
  async (id) => {
    return anecdoteService.voteAnecdote(id);
  }
);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    anecdoteVoted(state, action) {
      const anecdote = state.find((a) => a.id === action.payload.id);
      if (anecdote) {
        anecdote.votes += 1;
      }
    },
    anecdoteCreated(state, action) {
      const newAnecdote = asObject(action.payload);
      return [...state, newAnecdote];
    },
    anecdotesSet(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnecdotes.fulfilled, (state, { payload }) => {
        return (state = payload);
      })
      .addCase(createAnecdote.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(voteAnecdote.fulfilled, (state, { payload }) => {
        const index = state.findIndex((a) => a.id === payload.id);
        if (index !== -1) {
          state[index].votes++;
        }
      });
  },
});

export const { anecdoteVoted, anecdoteCreated, anecdotesSet } =
  anecdoteSlice.actions;

export default anecdoteSlice.reducer;
