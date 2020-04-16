import React from "react";

export function ImageLink(props) {
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
