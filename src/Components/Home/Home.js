import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Feautures/Movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch()

  useEffect(() => {
     const fetchMovies = async () => {
      const responce =  await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
            console.log("Error :", err)
        });
        dispatch(addMovies(responce.data))
     }
     fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  );
};

export default Home;