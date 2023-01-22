import { configureStore } from '@reduxjs/toolkit';
import todo1 from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todo1,
  },
});
