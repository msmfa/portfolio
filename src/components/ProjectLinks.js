import React from "react";
import GithubIcon from "./IMG/github-icon.png";
import { v4 as uuidv4 } from "uuid";
import { GreenArrow } from "./GreenArrow";

export function ProjectLinks(props) {
  return (
    <>
      <div className="p-link-flexbox">
        {" "}
        <a
          key={uuidv4()}
          href={props.info.map((item) => item.moreInfo)}
          target="_blank"
          rel="noopener noreferrer"
          id="p-read-more"
        >
          Read more
        </a>{" "}
        {props.linkItems.map((techUsed) => (
          <li key={uuidv4()} className="p-links">
            {techUsed}
          </li>
        ))}
      </div>
      <div className="more-info"> </div>

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
        <div key={uuidv4()}>
          <a
            id="p-view-link"
            key={uuidv4()}
            href={props.info.map((item) => item.viewLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GreenArrow />
          </a>
        </div>
      </div>
    </>
  );
}
