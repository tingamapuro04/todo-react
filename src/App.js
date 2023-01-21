import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './components/Todo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todo />
      <Todos />
    </div>
  );
}

export default App;
