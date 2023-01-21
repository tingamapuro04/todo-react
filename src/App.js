import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
