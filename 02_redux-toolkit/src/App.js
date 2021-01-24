
import './App.css';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Counter/>
      <CounterDisplay/>
      <TodoList/>
    </div>
  );
}

export default App;
