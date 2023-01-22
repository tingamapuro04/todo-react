import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react"
const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state = action.payload
    }
  }
})

export const { addTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
