import React from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";
import "./css/Header.css";
import "./css/About.css";
import "./css/ContactButton.css";
import "./css/ProjectSection.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContactButton from "./components/ContactButton";
import Links from "./components/Links";
import ProjectHeader from "./components/ProjectHeader";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { projectOne, projectTwo, projectThree } from "./projectData";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContactButton text={"Let's Talk"} />
      <ProjectHeader />
      <ProjectSection info={projectOne} />
      <ProjectSection info={projectThree} />
      <ProjectSection info={projectTwo} />
      <AboutSection />
      <Links />
      />
    </>
  );
}

export default App;
