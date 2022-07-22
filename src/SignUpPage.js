import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

function SignUpPage() {
  const [popUp, setPopUp] = useState("");

  const handleClickSignIn = () => {
    setPopUp("IN");
  };

  const handleClickSignUp = () => {
    setPopUp("UP");
  };

  const closeHandler = () => {
    setPopUp("");
  };

  return (
    <div>
      <Nav
        handleClickSignIn={handleClickSignIn}
        handleClickSignUp={handleClickSignUp}
      />
      <Home />
      {popUp === "IN" ? <SignIn closeHandler={closeHandler} /> : null}
      {popUp === "UP" ? <SignUp closeHandler={closeHandler} /> : null}
    </div>
  );
}

export default SignUpPage;
