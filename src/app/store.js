import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todo1 from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todo1
  },
});
