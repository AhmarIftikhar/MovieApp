import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
}  
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
      addMovies: (state, { payload}) => {
        state.movies = payload
      },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  }
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies

export default movieSlice.reducer