import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Intruduction from "./components/Intruduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Intruduction />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
