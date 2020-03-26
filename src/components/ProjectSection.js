import React, { Component } from "react";
import Covid from "./IMG/corona-app-screenshot.png";
import GithubIcon from "./IMG/github-icon.png";

class ProjectSection extends Component {
  render() {
    return (
      <>
        <div className="project-container">
          <img
            className="project-covid-image"
            src={Covid}
            alt="covid-19-app"
          ></img>
          <div className="project-container-main">
            <p className="project-title-two">Covis</p>
            <p className="project-title-one">Data Visualiser for Covid-19</p>
            <div className="project-text">
              This project was buit to help people visualise the impact of
              corona virus. I wanted to solve the problem of large data sets not
              being easy to understand. The App fetches real time data from John
              Hopskins University through an API and displays human icons to
              represent how many people are infected, cured and have died.
            </div>

            <div className="project-links">
              <ul>
                <li>React</li>
              </ul>
              <ul>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>Mathdroid API</li>
              </ul>
            </div>
            <div className="project-links-icons">
              <a
                href="https://github.com/msmfa/corona-dashboard"
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
                  href="https://msmfa.github.io/corona-dashboard/"
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
}

export default ProjectSection;
