import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
 posts: [],
 loading: false
}


export const getAllData = createAsyncThunk("posts", async ()=>{
    const resData = await axios.get("https://jsonplaceholder.typicode.com/posts");
   return resData.data;
})


export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllData.pending, (state) => {
        state.loading = true;

    })
    .addCase(getAllData.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading= false

    })
    .addCase(getAllData.rejected, (state) => {
        state.loading= false;

    })

  }
})


export const {  } = postSlice.actions

export default postSlice.reducer