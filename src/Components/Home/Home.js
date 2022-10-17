import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/MovieApiKey";

const Home = () => {

  useEffect(() => {
    const movieText = "Harry";
     const fetchMovies = async () => {
      const responce =  await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
            console.log("Error :", err)
        });
        console.log("The Responce From Apis", responce)
     }
     fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
  
    </div>
  );
};

export default Home;