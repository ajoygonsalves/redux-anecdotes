import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  anecdotesSet,
  anecdoteVoted,
  getAllAnecdotes,
  voteAnecdote,
} from "./reducers/anecdoteReducer";
import {
  notificationRemoved,
  notificationSet,
} from "./reducers/notificationReducer";
import anecdotesService from "./services/anecdoteService";

export default function AnecdoteList() {
  const { anecdotes, searchFilter } = useSelector((state) => state);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(searchFilter.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getAllAnecdotes());
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (id, message) => {
    dispatch(voteAnecdote(id));
    dispatch(notificationSet({ type: "VOTE", message }));
    setTimeout(() => {
      dispatch(notificationRemoved());
    }, 5000);
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
                <button
                  onClick={() => handleVote(anecdote.id, anecdote.content)}
                >
                  vote
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
}
