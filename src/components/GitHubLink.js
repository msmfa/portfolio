import React from "react";
import GithubIcon from "./IMG/github-icon.png";

function Links() {
  return (
    <ul>
      <li>
        <ImageLink img={GithubIcon} link="https://github.com/msmfa" />
        <div className="line"></div>
      </li>
    </ul>
  );
}

function ImageLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        style={{ bottom: `${props.height}em` }}
        className="icon"
        src={props.img}
        alt="icon"
      ></img>
    </a>
  );
}

export default Links;
