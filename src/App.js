import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './components/Todo';
import Todos from './components/Todos';
import '../src/components/Todo.scss'

function App() {
  return (
    <div className="App">
      <Todo />
      <h3 className='head'>Todays Activities</h3>
      <Todos />
    </div>
  );
}

export default App;
