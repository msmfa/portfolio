import React from "react";
import { ProjectLinks } from "./ProjectLinks";

function ProjectSection(props) {
  const linkItems = props.info
    .map((item) => item.techText)
    .toString()
    .split(",");
  const imageURL = props.info.map((item) => item.image);

  return (
    <>
      <div style={{ flexDirection: `${props.flex}` }} className="p-container">
        <img
          className="p-image"
          src={require(`./IMG/${imageURL}.png`)}
          alt="screenshot"
        ></img>
        <div className="p-container-right">
          {props.info.map((item) => (
            <h1 className="p-title">{item.title}</h1>
          ))}

          {props.info.map((item) => (
            <h2 className="p-subtitle">{item.subtitle}</h2>
          ))}

          {props.info.map((item) => (
            <div className="p-para">{item.para}</div>
          ))}

          <ProjectLinks linkItems={linkItems} info={props.info} />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
