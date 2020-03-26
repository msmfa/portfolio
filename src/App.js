import React, { Component } from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";
import "./css/Header.css";
import "./css/ContactButton.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContactButton from "./components/ContactButton";
import ProjectSection from "./components/ProjectSection";
import Links from "./components/Links";
import ProjectHeader from "./components/ProjectHeader";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Header />
        <ContactButton />
        <ProjectHeader />

        <ProjectSection />
        <ProjectSection />
        <ProjectSection />
        <Links />
      </>
    );
  }
}
export default App;
