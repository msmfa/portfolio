import React from "react";
import { ProjectLinks } from "./ProjectLinks";
import { v4 as uuidv4 } from "uuid";
import { ProjectImage } from "./ProjectImage";
import { ProjectText } from "./ProjectText";

function ProjectSection(props) {
  const linkItems = props.info
    .map((item) => item.techText)
    .toString()
    .split(",");
  const imageURL = props.info.map((item) => item.image);

  return (
    <>
      <div key={uuidv4()} className="project-container">
        <ProjectImage imageURL={imageURL} />
        <div className="project-subcontainer">
          <ProjectText info={props.info} />
          <ProjectLinks linkItems={linkItems} info={props.info} />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
