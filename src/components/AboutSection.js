import React from "react";

function AboutSection() {
  return (
    <>
      <div className="about-container">
        <p className="para">
          <h3>
            I'm a Front-end Software Engineer and{" "}
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
            When I'm not learning one of the above or wrestling with webpack I'm
            usually in the studio painting or on Codewars.
          </h3>
        </p>
      </div>
    </>
  );
}

export default AboutSection;
