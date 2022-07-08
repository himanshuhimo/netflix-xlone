import React from "react";
import "./SignUp.css";
import { useState } from "react";

// function signup(e) {
//   e.preventDefault();
//   var username = document.getElementById("uname").value;
//   var email = document.getElementById("email_id").value;
//   var pass = document.getElementById("psw").value;
//   var user = { username: username, email: email, password: pass };
//   var json = JSON.stringify(user);
//   localStorage.setItem(username, json);
//   localStorage.setItem(pass, pass);
//   localStorage.setItem(email, email);
//   console.log("user added");
// }

function SignUp(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    // e.preventDefault();
    // var user = { username: username, email: email, password: pass };
    // var json = JSON.stringify(user);
    //   localStorage.setItem(username, json);
    //   localStorage.setItem(pass, pass);
    //   localStorage.setItem(email, email);
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
    console.log("USER aDDED");
  };

  const sendDetailsToServer = () => {
    var username = document.getElementById("email").value;
    var email = document.getElementById("email_id").value;
    var pass = document.getElementById("password").value;

    var user = [{ username: "username" }, { email: email }, { password: pass }];
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    localStorage.setItem(pass, pass);
    localStorage.setItem(email, email);
  };

  return (
    <>
      <div className="signup_div">
        <button className="crossbtn">X</button>
        <h1>Sign Up</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder=""
          className="signup_1"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
        <label>Email Address</label>
        <input type="text" placeholder="" className="signup_1" id="email_id" />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          className="signup_1"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="text"
          placeholder=" Repeat Password"
          className="signup_1"
        />
        <button
          type="button"
          className="signup_btn"
          onClick={handleSubmitClick}
        >
          Sign Up
        </button>
        <hr />
        <p>Already Member?</p>
      </div>
    </>
  );
}

export default SignUp;
