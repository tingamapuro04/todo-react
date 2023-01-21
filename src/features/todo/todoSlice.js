import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: 'Todos',
  initialState,
  reducer: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    }
  }
})

export const { addTodo } = todoSlice.actions;
const todo1 = todoSlice.reducer
export default todo1;
