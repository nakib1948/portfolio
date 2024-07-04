import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Intruduction from "./components/Intruduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Snowfall from "react-snowfall";
function App() {
  return (
    <div style={{ background: "#282c34", position: "relative" }}>
      <Snowfall />
      <Navbar />
      <Intruduction />
      <Aboutme />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
