import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
// import { fa-solid fa-angle-right } from "@fortawesome/react-fontawesome";
function Home() {
  return (
    <header
      className="home_banner"
      // style={{
      // backgroundSize: "cover",
      // backgroundImage: `url(
      //   'https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      // )`,
      // backgroundPosition: "center center",
      // }}
    >
      <div className="home_banner_content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch ANywhere</h3>
        <h6>
          Ready to watch?Enter your email to create or restart your membership
        </h6>
        <span>
          <input
            type="text"
            placeholder="Email address"
            id="banner_button"
          ></input>
        </span>
        <span>
          <button className="get_started">
            Get Started
            {/* <FontAwesomeIcon icon="fa-solid fa-angle-right" /> */}
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </span>
      </div>
    </header>
  );
}

export default Home;
