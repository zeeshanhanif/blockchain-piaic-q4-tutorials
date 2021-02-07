
import { configureStore } from '@reduxjs/toolkit'
import { adopReducer } from './adoptSlice'

export const store = configureStore({
    reducer:  {
        adoptReducer : adopReducer
    }
})