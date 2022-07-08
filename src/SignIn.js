import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign_in_div">
      <button className="crossbtn">X</button>
      <h1>Sign In</h1>
      <input type="text" placeholder="Email or phone number" className="s1" />
      <input type="text" placeholder="Password" className="s2" />
      <button type="button" className="signin_btn">
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
