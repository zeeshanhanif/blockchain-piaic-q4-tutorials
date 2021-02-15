
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { adoptReducer } from './adoptSlice'

export const store = configureStore({
    reducer:  {
        adoptReducer : adoptReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
})