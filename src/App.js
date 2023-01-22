import React from 'react';
import './App.css';
import Todo from './components/Todo';
import Todos from './components/Todos';
import './components/Todo.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Todo />
      <h3 className="head">Todays Activities</h3>
      <Todos />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
