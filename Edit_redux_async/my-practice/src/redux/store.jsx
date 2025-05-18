import { configureStore } from '@reduxjs/toolkit'
import malReducer from './malSlice'

export const store = configureStore({
  reducer: {
    mallar: malReducer
  },
})