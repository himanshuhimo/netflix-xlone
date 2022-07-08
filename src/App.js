import "./App.css";
import requests from "./requests";
import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import Box from "./Box";
import SignIn from "./SignIn";
import SignUpPage from "./SignUpPage";
import MainPage from "./MainPage";

function App() {
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = () => {
  //   console.log("onshjbjh");
  //   setIsShown(true);
  // };

  return (
    <div className="App">
      {/* <div> */}
      {/* 👇️ show elements on click */}
      {/* {isShown && (
          <div>
            <h2>Some content here</h2>
          </div>
        )} */}

      {/* 👇️ show component on click */}
      {/* {isShown && <Box />} */}
      {/* </div> */}

      {/* <Nav handleClick={handleClick} />
      <Home />
      <hr /> */}
      {/* <Banner /> */}
      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <h1 style={{ color: "white" }}>hello</h1> */}
      {/* {isShown && <SignIn />} */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />}>
            {/* <Route index element={<SignUpPage />} /> */}
            <Route path="page2" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
