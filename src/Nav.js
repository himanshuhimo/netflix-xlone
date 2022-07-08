import React, { useEffect, useState } from "react";
import "./Nav.css";
// import SignIn from "./SignIn";

function Nav({ handleClickSignIn, handleClickSignUp }) {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  // function Nav({handleClickSignUp})

  return (
    // <div className={`nav ${show && "nav_black"}`}>
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix Logo"
      />
      {/* <img className="nav_avatar" src="" alt="netflix Logo" /> */}

      <button
        type="button"
        className="nav_avatar"
        onClick={handleClickSignIn}
        // onClick={<SignIn />}
      >
        SIGN IN
      </button>
      <button
        type="button"
        className="nav_avatar_signup"
        onClick={handleClickSignUp}
        // onClick={<SignUp />}
      >
        SIGN UP
      </button>
    </div>
    /* </div> */
  );
}

export default Nav;
