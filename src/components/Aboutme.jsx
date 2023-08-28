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
            data-aos-duration="1000"
          >
            <img
              src="https://i.ibb.co/RpdrJNY/software-developer-6521720-640.jpg"
              className="md:max-w-md lg:max-w-md sm:max-w-none rounded-lg shadow-2xl mask mask-circle"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <p className="text-5xl text-blue-400 font-semibold">About Me</p>
            <p className="md:py-6 lg:py-6 md:text-lg sm:text-base lg:text-lg">
              I am a skilled web developer with a Bachelor&rsquo;s degree in
              Computer Science. I aim to apply my technical skills and
              creativity to develop innovative, user-friendly web applications
              that fulfill client and end-user needs. My specialization lies in
              front-end development, utilizing technologies like React and the
              MERN stack to create interfaces seamlessly blending functionality
              with aesthetics. <br />
              <br /> I am committed to continuous learning, and staying updated
              with industry trends to incorporate the latest advancements into
              my projects. Collaboration is central to my approach, as I thrive
              in cross-functional teams where diverse perspectives drive
              innovation. Let&rsquo;s work together to reimagine the digital
              landscape and create impactful web solutions.
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
