import React from "react";
import { v4 as uuidv4 } from "uuid";
export function ProjectImage(props) {
  return (
    <img
      key={uuidv4()}
      className="project-image"
      src={require(`./IMG/${props.imageURL}.png`)}
      alt="screenshot"
    ></img>
  );
}
