import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "ToDoSlice",
    initialState: {
        todos: [{
            title: "Hello first todo"
        }]
    },
    reducers: {
        addTodo: (state,action)=>{
            state.todos.push(action.payload);
        }
    }
})

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer; 