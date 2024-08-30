import { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
function App() {
  const contect = useRef();
  const skills = useRef();
  const projects = useRef();
  const certificate = useRef();

  return (
    <div>
      <Navbar contectRef={contect} skillsRef={skills} projectsRef={projects} />

      <Home />

      <Skills skillsRef={skills} />

      <Projects projectRef={projects} />

      <Footer contectRef={contect} />
    </div>
  );
}

export default App;
