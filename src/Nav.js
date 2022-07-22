import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav({ handleClickSignIn, handleClickSignUp }) {
  // const [Show, handleShow] = useState(false);
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

  return (
    // <div className={`nav ${Show && "nav_black"}`}>
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix Logo"
      />

      <button type="button" className="nav_avatar" onClick={handleClickSignIn}>
        SIGN IN
      </button>
      <button
        type="button"
        className="nav_avatar_signup"
        onClick={handleClickSignUp}
      >
        SIGN UP
      </button>
    </div>
    // </div>
  );
}

export default Nav;
