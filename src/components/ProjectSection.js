import React from "react";
import Covid from "./IMG/corona-app-screenshot.png";

function ProjectSection() {
  return (
    <>
      <div className="project-container">
        <img
          className="project-covid-image"
          src={Covid}
          alt="covid-19-app"
        ></img>
        <div className="project-aside">
          <p className="project-title">Covis</p>
          <p>
            This project was buit to help people visualise the impact of corona
            virus. I wanted to solve the problem of large data sets not being
            easy to understand. The App fetches real time data from John
            Hopskins University through an API and displays human icons to
            represent how many people are infected, cured and have died.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
