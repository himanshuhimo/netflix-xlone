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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="home" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
