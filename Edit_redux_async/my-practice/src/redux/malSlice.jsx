import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  mallar: [],
  loading: false
}

export const getAllData = createAsyncThunk("mallar", async () => {
  const resData = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return resData.data;
})

export const malSlice = createSlice({
  name: 'mal',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.mallar = action.payload;
        state.loading = false;
      })
      .addCase(getAllData.rejected, (state) => {
        state.loading = false;
      })
  }
})


export const { decrement } = malSlice.actions

export default malSlice.reducer