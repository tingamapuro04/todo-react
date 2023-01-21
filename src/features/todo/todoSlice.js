import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
