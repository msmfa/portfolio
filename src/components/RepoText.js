import React from "react";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "./timeSince";
import { GreenArrow } from "./GreenArrow";
// import ExternalLink from "./IMG/sign.png";

export function RepoText(props) {
  return props.display.map((item) => (
    <div className="repo" key={uuidv4()}>
      <div className="repo-flex">
        <li className="repo-title" key={uuidv4()}>
          {item.name} <GreenArrow />
        </li>
        <li>
          {" "}
          <a
            key={uuidv4()}
            href={item.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
              className="repo-external-link"
              src={ExternalLink}
              alt="link"
            ></img> */}
          </a>
        </li>
      </div>
      <li className="repo-description" key={uuidv4()}>
        {item.description}
      </li>
      <li className="updated-link" key={uuidv4()}>
        Updated {timeSince(new Date(item.updated_at))}
      </li>
    </div>
  ));
}
