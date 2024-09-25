import React from "react";
import { useDispatch } from "react-redux";
import { anecdoteCreated } from "./reducers/anecdoteReducer";
import {
  notificationRemoved,
  notificationSet,
} from "./reducers/notificationReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(anecdoteCreated(content));
    dispatch(notificationSet({ type: "CREATE_ANECDOTE", message: content }));
    setTimeout(() => {
      dispatch(notificationRemoved());
    }, 5000);
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
