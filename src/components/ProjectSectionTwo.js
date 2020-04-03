import React from "react";
import VisualiserImage from "./IMG/sorting-visualiser.png";
import GithubIcon from "./IMG/github-icon.png";

function ProjectSectionTwo() {
  return (
    <>
      <div className="project-container">
        <img
          className="project-covid-image"
          src={VisualiserImage}
          alt="covid-19-app"
        ></img>
        <div className="project-container-main">
          <p className="project-title-two">Sort</p>
          <p className="project-title-one">
            Data Visualiser for Sorting Algorithms
          </p>
          <div className="project-text">
            This project was built to help visualise how different sorting
            algorithms actually work. The sorting algorithms chosen were quick
            sort, merge sort and insertion sort.
          </div>

          <div className="project-links">
            <ul>
              <li>HTML & CSS</li>
            </ul>
            <ul>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>React</li>
            </ul>
            <ul>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="project-links-icons">
            <a
              href="https://github.com/msmfa/sorting-visualiser"
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
                href="https://sort-vis.netlify.com//"
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

export default ProjectSectionTwo;
