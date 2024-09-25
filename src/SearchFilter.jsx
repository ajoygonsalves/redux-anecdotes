import React from "react";
import { useDispatch } from "react-redux";
import { anecdoteSearched } from "./reducers/searchFilterReducer";

export default function SearchFilter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(anecdoteSearched(event.target.value));
  };

  return (
    <>
      <label htmlFor="searchFilter">search filter: </label>
      <input name="searchFilter" onChange={handleChange} />
    </>
  );
}
