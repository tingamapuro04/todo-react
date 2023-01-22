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
      const id = action.payload
      const existingItem = state.find((item) => item.id  === id)
      const ind = state.findIndex((item) => item.id === id)
      const new_state = state.splice(ind, 1)
    }


  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
