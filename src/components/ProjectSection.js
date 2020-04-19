import React from "react";
import { ProjectLinks } from "./ProjectLinks";
import { v4 as uuidv4 } from "uuid";

function ProjectSection(props) {
  const linkItems = props.info
    .map((item) => item.techText)
    .toString()
    .split(",");
  const imageURL = props.info.map((item) => item.image);

  return (
    <>
      <div
        key={uuidv4()}
        style={{ flexDirection: `${props.flex}` }}
        className="p-container"
      >
        <img
          key={uuidv4()}
          className="p-image"
          src={require(`./IMG/${imageURL}.png`)}
          alt="screenshot"
        ></img>
        <div className="p-container-right">
          {props.info.map((item) => (
            <h1 key={uuidv4()} className="p-title">
              {item.title}
            </h1>
          ))}

          {props.info.map((item) => (
            <h2 key={uuidv4()} className="p-subtitle">
              {item.subtitle}
            </h2>
          ))}

          {props.info.map((item) => (
            <div key={uuidv4()} className="p-para">
              {item.para}
            </div>
          ))}

          <ProjectLinks linkItems={linkItems} info={props.info} />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
