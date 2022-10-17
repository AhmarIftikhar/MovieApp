import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import PageNotFound from "./Components/PageNotFound/PageNotFound";
// import MovieDetail from "./Components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
        <Header/>
        <div className="container"> 
        <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;
