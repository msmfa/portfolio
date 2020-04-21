import React from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";
import "./css/Header.css";
import "./css/About.css";
import "./css/ContactButton.css";
import "./css/ProjectSection.css";
import "./css/ContentHeaders.css";
import "./css/MoreProjects.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import GitHubLink from "./components/GitHubLink";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/Projects/ProjectSection";
import { projectOne, projectTwo, projectThree } from "./projectData";
import MoreProjects from "./components/MoreProjects/MoreProjects";
import ContentHeaders from "./components/ContentHeaders";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutSection />
      <ContentHeaders id="proj" text="Featured Projects" />
      <ProjectSection info={projectOne} />
      <ProjectSection info={projectThree} />
      <ProjectSection info={projectTwo} />
      <MoreProjects />
      <GitHubLink />
    </>
  );
}

export default App;
