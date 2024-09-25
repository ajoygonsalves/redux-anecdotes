import React from "react";
import { useDispatch } from "react-redux";
import { anecdoteCreated } from "./reducers/anecdoteReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(anecdoteCreated(content));
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
}
