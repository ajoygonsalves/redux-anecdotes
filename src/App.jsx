import { useSelector, useDispatch } from "react-redux";
import { createNoteAction, voteAction } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAction(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(createNoteAction(content));
    event.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
