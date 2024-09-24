import AnecdoteForm from "./AnecdoteForm";
import AnecdoteList from "./AnecdoteList";
import SearchFilter from "./SearchFilter";

const App = () => {
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
