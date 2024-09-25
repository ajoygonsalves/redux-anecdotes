import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { anecdoteVoted } from "./reducers/anecdoteReducer";

export default function AnecdoteList() {
  const { anecdotes, searchFilter } = useSelector((state) => state);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const dispatch = useDispatch();

  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (id) => {
    dispatch(anecdoteVoted({ id }));
  };

  return (
    <>
      {sortedAnecdotes.map(
        (anecdote) =>
          anecdote && (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
      )}
    </>
  );
}
