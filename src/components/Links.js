import React from "react";
import GithubIcon from "./IMG/github-icon.png";

function Links() {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://github.com/msmfa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src={GithubIcon} alt="github"></img>
          </a>
          <div className="line"></div>
        </li>
      </ul>
    </>
  );
}

export default Links;
