import React from "react";
import GithubIcon from "./IMG/github-icon.png";

function Links() {
  return (
    <>
      <ul>
        <li>
          <img className="github" src={GithubIcon} alt="github"></img>
          <div className="line"></div>
        </li>
      </ul>
    </>
  );
}

export default Links;
