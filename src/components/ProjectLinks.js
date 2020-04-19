import React from "react";
import GithubIcon from "./IMG/github-icon.png";
import { v4 as uuidv4 } from "uuid";

export function ProjectLinks(props) {
  return (
    <>
      <div className="p-link-flexbox">
        {" "}
        {props.linkItems.map((item) => (
          <li key={uuidv4()} className="p-links">
            {item}
          </li>
        ))}
      </div>
      <div className="more-info">
        {" "}
        <a
          key={uuidv4()}
          href={props.info.map((item) => item.moreInfo)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>

      <div className="p-icons">
        <a
          key={uuidv4()}
          href={props.info.map((item) => item.githubLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={uuidv4()}
            className="p-github-link"
            src={GithubIcon}
            alt="github"
          ></img>
        </a>
        <div key={uuidv4()} className="p-view-link">
          <a
            key={uuidv4()}
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
