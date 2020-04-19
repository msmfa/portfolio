import React from "react";
import ContentHeaders from "./ContentHeaders";

function AboutSection() {
  return (
    <>
      <div id="about-container">
        <ContentHeaders id="about" text="About Me" />
        <p className="para">
          <h3>
            I'm a Front-end Developer and{" "}
            <a
              href="https://www.michaelsydneymoore.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artist.
            </a>
          </h3>
          <h3>
            I like creating elegant front ends with modern and clean code. I'm
            currently learning Typescript and the functional programming
            paradigm within Javascript.
          </h3>
          <h3>
            Interested in learning more of the full stack. Currently making some
            small projects with Node.js and Express.
          </h3>
          <h3>
            When I'm not learning one of the above or wrestling with webpack I'm
            usually in the studio painting or on{" "}
            <a
              href="https://www.codewars.com/users/msmfa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codewars
            </a>
            .
          </h3>
        </p>
      </div>
    </>
  );
}

export default AboutSection;
