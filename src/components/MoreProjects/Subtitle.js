import React from "react";

export function Subtitle() {
  return (
    <h2 className="more-subtitle">
      This is an automatically updated feed of my latest projects built using
      the Github API.{" "}
      <a
        href="https://www.npmjs.com/package/github-repo-display-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Available as a NPM Package for React.
      </a>{" "}
    </h2>
  );
}
