import React, { useState, useEffect } from "react";
import "./SignIn.css";

function SignIn({ closeHandler }) {
  const [item, setItem] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setItem({ ...item, [id]: value });
  };

  useEffect(() => {
    console.log(item);
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();


    const data = localStorage.getItem("data");
    if (!data) {
      return
    }
    const users = JSON.parse(data);

    if (!item.email || !item.password) {
      alert("Please enter details", item.email, item.password)
    }
    else {
      let flag = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == item.email && users[i].password == item.password) {
          flag = true;
          break;
        }
      }
      if (flag){
        alert("Welcome to netflix")
      } else {
        alert("Please enter correct username or password")
      }
    }
  };


  return (
    <div className="sign_in_div">
      <button className="crossbtn" onClick={closeHandler}>X</button>
      <h1>Sign In</h1>
      <input type="text" id="email" placeholder="Email or phone number" className="s1" onChange={handleChange} />
      <input type="text" id="password" placeholder="Password" className="s2" onChange={handleChange} />
      <button type="button" className="signin_btn" onClick={handleSubmitClick}>
        Sign In
      </button>
      <span>
        <input type="checkbox" name="rem" value="rem me" className="s3"></input>
        <label for="rem" className="s3">
          Remember me
        </label>
      </span>
      <p className="s4">New to Netflix?</p>
    </div>
  );
}

export default SignIn;
