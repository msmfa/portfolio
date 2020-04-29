import React from "react";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "../timeSince";
import ExternalLink from "../IMG/arrow.jpg";

export function RepoText(props) {
  return props.display.map((repo) => (
    <div className="repo" key={uuidv4()}>
      <div className="repo-flex">
        <li className="repo-title" key={uuidv4()}>
          {repo.name}{" "}
          {
            <a
              key={uuidv4()}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-arrow"
                src={ExternalLink}
                alt="link-to-github-projects"
              ></img>
            </a>
          }
        </li>
      </div>
      <li className="repo-description" key={uuidv4()}>
        {repo.description}
      </li>
      <li className="updated-link" key={uuidv4()}>
        Updated {timeSince(new Date(repo.updated_at))}
      </li>
    </div>
  ));
}
