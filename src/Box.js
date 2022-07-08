import React from "react";
import Home from "./Home";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import { useState } from "react";

function Box() {
  //   const [isShown, setIsShown] = useState(false);

  //   const handleClick = (event) => {
  //     // 👇️ toggle shown state
  //     setIsShown((current) => !current);

  //     // 👇️ or simply set it to true
  //     // setIsShown(true);
  //   };
  return (
    <div>
      <Row
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
      <h1 style={{ color: "white" }}>hello</h1>
    </div>
  );
}

export default Box;
