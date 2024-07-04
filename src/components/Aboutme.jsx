import download from "../assets/icons8-download-48.png";
import resume from "../assets/resume.pdf";

const Aboutme = () => {
  return (
    <div id="about">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="flip-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <img
              src="https://i.ibb.co/RpdrJNY/software-developer-6521720-640.jpg"
              className="md:max-w-lg lg:max-w-lg sm:max-w-none rounded-lg shadow-2xl mask mask-circle"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <p className="text-5xl text-blue-400 font-semibold">About Me</p>
            <p className="md:py-6  lg:py-6 md:text-lg sm:text-base lg:text-lg">
              Hi there! I&rsquo;m Hayat, a passionate Full Stack Web Developer.
              I recently earned my Bachelor of Science in Computer Science and
              Engineering from the International Islamic University Chittagong.
              I have a solid foundation in technologies such as Node.js, React,
              Next.js, MongoDB, and PostgreSQL. I&rsquo;m deeply committed to
              continuous learning and regularly keep up with industry trends to
              ensure my projects incorporate the latest advancements. I thrive
              in collaborative environments and believe that teamwork and
              diverse perspectives are key to innovative solutions. I&rsquo;m
              dedicated to applying my knowledge and skills to create meaningful
              and efficient web applications. <br />
              <br /> With a professional and enthusiastic approach, I am eager
              to bring my expertise, dedication, and enthusiasm to a
              forward-thinking organization. I am straightforward, confident,
              and enjoy engaging with others, always striving to be kind and
              compassionate in my interactions.
            </p>
            <a href={resume} download="Hayat(resume)">
              <button className="btn btn-outline btn-primary ">
                {" "}
                <span className="text-white">Resume</span>{" "}
                <img className="h-7" src={download} alt="" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/nakib1948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary ml-3">Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
