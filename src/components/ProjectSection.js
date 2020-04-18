import React from "react";
import GithubIcon from "./IMG/github-icon.png";

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

function ProjectLinks(props) {
  return (
    <>
      <div className="p-link-flexbox">
        {" "}
        {props.linkItems.map((item) => (
          <li className="p-links">{item}</li>
        ))}
      </div>
      <div className="more-info">
        {" "}
        <a
          href={props.info.map((item) => item.moreInfo)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>

      <div className="p-icons">
        <a
          href={props.info.map((item) => item.githubLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="p-github-link" src={GithubIcon} alt="github"></img>
        </a>
        <div className="p-view-link">
          <a
            href={props.info.map((item) => item.viewLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectSection;
