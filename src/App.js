import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
        <Header/>
        <div className="container">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route element={<PageNotFound/>} />
      </Routes>
        </div>
        <Footer />
    </div>
  );
}
export default App;
