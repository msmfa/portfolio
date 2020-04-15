import React from "react";
import VisualiserImage from "./IMG/j30screenshot.png";
import GithubIcon from "./IMG/github-icon.png";

function ProjectSectionThree() {
  return (
    <>
      <div className="project-container">
        <img
          className="project-covid-image"
          src={VisualiserImage}
          alt="covid-19-app"
        ></img>
        <div className="project-container-main">
          <p className="project-title-two">Javascript In 30 Words</p>
          <p className="project-title-one">
            A pre-interview refresher for Javascript interviews
          </p>
          <div className="project-text">
            This project was built to solidify my understanding of Javascript
            fundamentals and advanced topics. For a detailed breakdown on the
            project you can read{" "}
            <a
              href="https://dev.to/msmfa/i-tried-to-explain-everything-in-javascript-in-30-words-1nl4"
              target="_blank"
              rel="noopener noreferrer"
            >
              my article here.
            </a>
          </div>

          <div className="project-links">
            <ul>
              <li>HTML & CSS</li>
            </ul>
            <ul>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>Jest</li>
            </ul>
          </div>
          <div className="project-links-icons">
            <a
              href="https://github.com/msmfa/javascript-in-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-github-link"
                src={GithubIcon}
                alt="github"
              ></img>
            </a>

            <div className="project-view-link">
              <a
                href="https://javascript-in-30-words.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSectionThree;
