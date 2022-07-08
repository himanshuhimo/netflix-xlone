import React, { useEffect } from "react";
import "./SignUp.css";
import { useState } from "react";


function SignUp(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({  ...state,   [id]: value });
  };

  useEffect(() => {
    console.log(state);
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
      alert('Added successfully');
      setState({
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
      })
    } else {
      alert("Passsword not matched...");
    }
  };

  const sendDetailsToServer = () => {
    const data = localStorage.getItem("data");
    if (data) {
      const jsonData = JSON.parse(data);
      jsonData.push(state);
      localStorage.setItem("data", JSON.stringify(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify([state]));
    }
  };

  return (
    <>
      <div className="signup_div">
        <button className="crossbtn" onClick={props.closeHandler}><i className="fa fa-remove"></i></button>
        <h1>Sign Up</h1>
        <br></br>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="signup_1"
          id="username"
          value={state.username}
          onChange={handleChange}
        />
        <br></br>
        <label>Email Address</label>
        <input type="text" placeholder="Email" className="signup_1" id="email" value={state.email} onChange={handleChange} />
        <br></br>
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          className="signup_1"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <br></br>
        <label>Confirm Password</label>
        <input
          type="text"
          placeholder=" Repeat Password"
          className="signup_1"
          id="confirmPassword"
          value={state.confirmPassword} onChange={handleChange}
        />
        <br></br>
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
