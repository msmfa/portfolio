import React from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";
import "./css/Header.css";
import "./css/About.css";
import "./css/ContactButton.css";
import "./css/ProjectSection.css";
import "./css/ContentHeaders.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContactButton from "./components/ContactButton";
import Links from "./components/Links";
import ProjectHeader from "./components/ProjectHeader";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { projectOne, projectTwo, projectThree } from "./projectData";
import ContentHeaders from "./components/ContentHeaders";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContactButton text={"Let's Talk"} />
      <ContentHeaders text="About Me" />
      <AboutSection />
      <ContentHeaders id="proj" text="Featured Projects" />
      <ProjectSection info={projectOne} />
      <ProjectSection flex="row-reverse" info={projectThree} />
      <ProjectSection info={projectTwo} />
      <ContentHeaders text="More Projects" />
      <Links />
    </>
  );
}

export default App;
