import React, { Component } from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";
import "./css/Header.css";
import "./css/About.css";
import "./css/ContactButton.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContactButton from "./components/ContactButton";
import ProjectSection from "./components/ProjectSection";
import Links from "./components/Links";
import ProjectHeader from "./components/ProjectHeader";
import AboutSection from "./components/AboutSection";
import ProjectSectionTwo from "./components/ProjectSectionTwo";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Header />
        <ContactButton />
        <ProjectHeader />
        <ProjectSection />
        <ProjectSectionTwo />
        <AboutSection />
        <Links />
      </>
    );
  }
}
export default App;
