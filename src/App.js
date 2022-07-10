import "./App.css";
// import requests from "./requests";
import React from "react";
// import Row from "./Row";
// import Banner from "./Banner";
// import Nav from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./Home";
import SignUpPage from "./SignUpPage";
import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
