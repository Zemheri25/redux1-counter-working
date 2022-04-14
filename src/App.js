
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/store';
function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  
  
  
  
  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addValue10 = () => {
    dispatch(actions.addBy(30))
  }
 
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>My number : {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addValue10}>Add by 10</button>
    </div>
  );
}

export default App;
