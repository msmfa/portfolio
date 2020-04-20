import React from "react";
import { v4 as uuidv4 } from "uuid";
export function ProjectText(props) {
  return (
    <>
      {props.info.map((item) => (
        <h1 key={uuidv4()} className="project-title">
          {item.title}
        </h1>
      ))}

      {props.info.map((item) => (
        <h2 key={uuidv4()} className="project-subtitle">
          {item.subtitle}
        </h2>
      ))}

      {props.info.map((item) => (
        <div key={uuidv4()} className="project-text">
          {item.para}
        </div>
      ))}
    </>
  );
}
