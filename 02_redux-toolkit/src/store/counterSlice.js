import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "CounterSlice",
    initialState: {
        counter: 350,
        user: {
            name: "Qasim",
            age: 23
        }
    },
    reducers: {
        increment: (state)=> {
            state.counter+=1
        },
        decrement: (state)=> {
            state.counter-=1
        },
        incrementByValue: (state,action)=>{
            state.counter+= action.payload
        },
        updateName: (state,action)=>{
            console.log("action = ",action);
            state.user.name = action.payload.name
        }
    }
});

export const { increment, decrement, incrementByValue , updateName} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;