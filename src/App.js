import React from "react";
import "./css/Nav.css";
import "./App.css";
import "./css/Links.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContactButton from "./components/ContactButton";
import ProjectSection from "./components/ProjectSection";
import Links from "./components/Links";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContactButton />

      <ProjectSection />
      <ProjectSection />
      <Links />
    </>
  );
}

export default App;
