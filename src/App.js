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
const projectTwo = [
  {
    title: "Javascript In 30 Words",
    subtitle: "A pre-interview refresher for Javascript interviews",
    para: `This project was built to solidify my understanding of Javascript
    fundamentals and advanced topics. For a detailed breakdown on the
    project you can read my article here.`,
    techText: ["Javascript", "Jest"],
    viewLink: "https://javascript-in-30-words.netlify.com/",
    githubLink: "https://github.com/msmfa/javascript-in-30",
    image: "j30screenshot",
  },
];
const projectThree = [
  {
    title: "Sort",
    subtitle: "Data Visualiser for Sorting Algorithms",
    para: `This project was built to help visualise how different sorting
    algorithms actually work. The sorting algorithms chosen were quick
    sort, merge sort and insertion sort.`,
    techText: ["Javascript", "React"],
    viewLink: "https://sort-vis.netlify.com//",
    githubLink: "https://github.com/msmfa/sorting-visualiser",
    image: "sorting-visualiser",
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
      <ProjectSection info={projectTwo} />
      <ProjectSection info={projectThree} />

      <AboutSection />
      <Links />
    </>
  );
}

export default App;
