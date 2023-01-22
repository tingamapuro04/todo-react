import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react"
const initialState = [];

// const todos = localStorage.getItem('mobutu') !== null ? JSON.parse(localStorage.getItem('mobutu')) : [];


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
      // localStorage.setItem('mobutu', JSON.stringify(state.todos.map(item => item)))
    }
  }
})

export const { addTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
