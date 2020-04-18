import React from "react";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "./timeSince";

export function RepoText(props) {
  return props.display.map((item) => (
    <div className="repo" key={uuidv4()}>
      <li className="repo-title" key={uuidv4()}>
        {item.name}
      </li>
      <li className="repo-description" key={uuidv4()}>
        {item.description}
      </li>
      <li className="github-link" key={uuidv4()}>
        <a
          key={uuidv4()}
          href={item.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>

      <li className="updated-link" key={uuidv4()}>
        Updated {timeSince(new Date(item.updated_at))}
      </li>
    </div>
  ));
}
