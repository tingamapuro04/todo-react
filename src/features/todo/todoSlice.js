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
      // localStorage.setItem('mobutu', JSON.stringify(state.map(item => item)))
    },

    removeTodo: (state, action) => {
      let new_item = state.find((item) => item.id === action.payload)
      const new_data = state.filter((item) => item.id !== action.payload)
      state = new_data
    }


  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
