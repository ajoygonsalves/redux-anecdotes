import AnecdoteForm from "./AnecdoteForm";
import AnecdoteList from "./AnecdoteList";
import SearchFilter from "./SearchFilter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.querySelector("html").style.backgroundColor = "grey";
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <SearchFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
