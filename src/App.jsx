import { useDispatch, useSelector } from "react-redux";
import AnecdoteForm from "./AnecdoteForm";
import { voteAction } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (id) => {
    dispatch(voteAction(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </div>
  );
};

export default App;
