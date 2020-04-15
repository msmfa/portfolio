import React from "react";
import Placeholder from "./IMG/circle-portfolio.jpg";

function AboutSection() {
  return (
    <>
      <div id="about" className="about-container">
        <div className="about-text">
          <div className="about-subtitle about-title">About me</div>
          Hello! I'm Michael. I like using clean code to solve problems.
          <div className="about-subtitle">
            Outside of tech most of my time is taken up by my other job as an{" "}
            <a
              href="https://www.michaelsydneymoore.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oil Painter.
            </a>
          </div>
          Most of my experience is within the front end but I'm also interested
          in learning more of the stack.
          <div>
            I'm currently looking for an opportunity to learn more within a
            professional development environment.
          </div>
          <div className="about-subtitle about-subtitle-one">
            {" "}
            Here are a few technologies I've been working with recently:
          </div>{" "}
          <div className="about-subtitle about-subtitle-two">
            <ul>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>Webpack</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        {/* //<img className="profile-photo" src={Placeholder} alt="human"></img> */}
      </div>
    </>
  );
}

export default AboutSection;
