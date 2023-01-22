import React from 'react';
import './App.scss';
import Todo from './components/Todo';
import Todos from './components/Todos';
import './components/Todo.scss';

function App() {
  return (
    <div className="App">
      <Todo />
      <h3 className="head">Todays Activities</h3>
      <Todos />
    </div>
  );
}

export default App;
