/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const todos = localStorage.getItem('mobutu') !== null ? JSON.parse(localStorage.getItem('mobutu')) : [];

const todoSlice = createSlice({
  name: 'todos',
  initialState: todos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('mobutu', JSON.stringify(state.map((item) => item)));
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      const ind = state.findIndex((item) => item.id === id);
      const newState = state.splice(ind, 1);
      state = newState;
      localStorage.setItem('mobutu', JSON.stringify(state.map((item) => item)));
    },

  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer;
export default todo1;
