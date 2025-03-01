import { useRef } from "react";
import { BrowserRouter } from "react-router";

import BackgroundAnimation from "./components/BackgroundAnimation";
import NavBar from "./components/Navbar";
import Display from "./components/Display";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useRef } from "react";

const App = () => {
  const displayRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleAbout = () => {
    displayRef.current.scrollIntoView();
  };
  const handleSkills = () => {
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleEducation = () => {
    educationRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <BackgroundAnimation />
      <NavBar
        handleAbout={handleAbout}
        handleContact={handleContact}
        handleEducation={handleEducation}
        handleProjects={handleProjects}
        handleSkills={handleSkills}
      />
      <Display ref={displayRef} />
      <Skills ref={skillsRef} />
      <Education ref={educationRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </BrowserRouter>
  );
};

export default App;
