import React from "react";
import GithubIcon from "./IMG/github-icon.png";
import { ImageLink } from "./ImageLink";

function Links() {
  return (
    <>
      <ul>
        <li>
          <ImageLink img={GithubIcon} link="https://github.com/msmfa" />
          />
          <div className="line"></div>
        </li>
      </ul>
    </>
  );
}

export default Links;
