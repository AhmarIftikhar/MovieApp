import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}  
export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
 
  },
})

export const {  } = counterSlice.actions

export default counterSlice.reducer