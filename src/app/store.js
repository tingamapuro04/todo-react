import { configureStore } from '@reduxjs/toolkit';
import todo1 from '../features/todo/todoSlice';

const store = configureStore({
  reducer: {
    todos: todo1,
  },
});

export default store;
