import React from "react";
import Placeholder from "./IMG/placeholder.png";
import ProfilePhoto from "./IMG/portfolio.JPG";

function AboutSection() {
  return (
    <>
      <div id="about" className="about-container">
        <div className="about-text">
          <div className="about-title">About me</div>
          Hello! I'm Michael. I like using clean code to solve problems. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <div className="about-subtitle-one">
            {" "}
            Here are a few technologies I've been working with recently:
          </div>{" "}
          <div className="about-subtitle-two">
            <ul>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>Webpack</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <img className="profile-photo" src={Placeholder} alt="human"></img>
      </div>
    </>
  );
}

export default AboutSection;
