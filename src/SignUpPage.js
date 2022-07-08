import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

function SignUpPage() {
  const [isShown, setIsShown] = useState(false);
  const [isShownSignUp, setIsShownSignUp] = useState(false);

  const handleClick = () => {
    console.log("onshjbjh");
    setIsShown(true);
  };
  const handleClickSignUp = () => {
    console.log("yes iam visible");
    setIsShownSignUp(true);
  };

  return (
    <div>
      <Nav handleClick={handleClick} handleClickSignUp={handleClickSignUp} />
      <Home />
      {isShown && <SignIn />}
      {isShownSignUp && <SignUp />}
    </div>
  );
}

export default SignUpPage;
