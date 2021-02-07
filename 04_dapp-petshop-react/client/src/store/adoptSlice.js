import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";

export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async()=>{
        const web3 = new Web3 (Web3.givenProvider);
        await Web3.givenProvider.enable();
        return web3;
    }
)

const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
        contract: null,
    },
    reducers: {
        adopt: ()=>{

        }
    },
    extraReducers: {
        [initWeb3.fulfilled]: (state,action)=>{
            state.web3 = action.payload
        }
    }
})

export const adopReducer = adoptSlice.reducer;
export const { adopt } = adoptSlice.actions;