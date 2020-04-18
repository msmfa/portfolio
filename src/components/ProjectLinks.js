import React from "react";
import GithubIcon from "./IMG/github-icon.png";
export function ProjectLinks(props) {
  return (
    <>
      <div className="p-link-flexbox">
        {" "}
        {props.linkItems.map((item) => (
          <li className="p-links">{item}</li>
        ))}
      </div>
      <div className="more-info">
        {" "}
        <a
          href={props.info.map((item) => item.moreInfo)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>

      <div className="p-icons">
        <a
          href={props.info.map((item) => item.githubLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="p-github-link" src={GithubIcon} alt="github"></img>
        </a>
        <div className="p-view-link">
          <a
            href={props.info.map((item) => item.viewLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
    </>
  );
}
