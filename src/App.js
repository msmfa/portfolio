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
import ProjectSectionTwo from "./components/ProjectSectionTwo";
import ProjectSectionThree from "./components/ProjectSectionThree";

const projectOne = [
  {
    title: "Covis",
    subtitle: "Data Visualiser for Covid-19",
    para: `This project was buit to help people visualise the impact of
  corona virus. I wanted to solve the problem of large data sets not
  being easy to understand. The App fetches real time data from John
  Hopskins University through an API and displays human icons to
  represent how many people are infected, cured and have died.`,
    techText: ["React", "Mathroid API"],
    viewLink: "https://msmfa.github.io/corona-dashboard/",
    githubLink: "https://github.com/msmfa/corona-dashboard",
    image: "corona-app-screenshot",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContactButton text={"Let's Talk"} />
      <ProjectHeader />
      <ProjectSection info={projectOne} />
      <ProjectSectionTwo />
      <ProjectSectionThree />
      <AboutSection />
      <Links />
    </>
  );
}

export default App;
