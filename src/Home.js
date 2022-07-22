import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
      <header className="home_banner"></header>
      <div className="home_banner_content">
        <p style={{ fontSize: 80, fontWeight: "bold" }}>
          Unlimited movies, TV shows and more.
        </p>
        <p style={{ fontSize: 40 }}>Watch aywhere. Cancel anytime.</p>
        <p style={{ fontSize: 25, marginTop: 30 }}>
          Ready to watch?Enter your email to create or restart your membership.
        </p>
        <div id="banner_button">
          <span>
            <input
              type="text"
              placeholder="Email address"
              className="input"
            ></input>
          </span>
          <span>
            <button className="get_started">
              Get Started &nbsp;<i className="fa fa-solid fa-angle-right"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="container_rowinhome">
        <div className="rowinhome">
          <div className="text_rowinhome">
            <h1>Enjoy on your TV.</h1>
            <h3>Watch on smart TVs,PlayStation,Xbox,Apple TV and more.</h3>
          </div>
          <div className="media_rowinhome">
            <div>
              <img
                className="img_rowinhome"
                alt="tvimage"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
            </div>
            <div>
              <video
                className="video_rowinhome"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container_rowinhome">
        <div className="rowinhome">
          <div className="text_rowinhome">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favourite easily and always have something to watch.
            </h3>
          </div>
          <div className="media_rowinhome">
            <div>
              <img
                className="img_rowinhome"
                alt="tvimage"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
            </div>
            <div>
              <video
                className="video_rowinhome"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
