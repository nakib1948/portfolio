import { TypeAnimation } from "react-type-animation";
import download from "../assets/icons8-download-48.png";
import resume from "../assets/resume.pdf";
import { HashLink } from "react-router-hash-link";

const Intruduction = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
        <img
          src="https://i.ibb.co/D9vVNyC/me.jpg"
          className="max-w-lg rounded-lg shadow-2xl mask mask-decagon"
        />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p className="text-xl">Hi, I am</p>
          <h1 className="text-5xl text-blue-300 font-serif my-5">
            MD. HAYAT HOSSAIN
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "React.js Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "MERN Stack Developer",
              1000,
              "Front End Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
          <br />
          <HashLink to="#contact">
            <button className="btn btn-primary mt-5">Hire Me</button>
          </HashLink>
          <a href={resume} download="Hayat(resume)">
            <button className="btn btn-outline btn-primary ml-3">
              {" "}
              <span className="text-white">Resume</span>{" "}
              <img className="h-7" src={download} alt="" />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intruduction;
