import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'

export const store = configureStore({
  reducer: {
    eli: postReducer
  },
})