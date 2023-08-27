import download from "../assets/icons8-download-48.png"


const Aboutme = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/RpdrJNY/software-developer-6521720-640.jpg"
            className="max-w-md rounded-lg shadow-2xl mask mask-circle"
          />
          <div>
            <p className="text-5xl text-blue-400 font-semibold">About Me</p>
            <p className="py-6 text-lg">
              I am a skilled web developer with a Bachelor&rsquo;s degree in Computer
              Science. I aim to apply my technical skills and creativity to
              develop innovative, user-friendly web applications that fulfill
              client and end-user needs. My specialization lies in front-end
              development, utilizing technologies like React and the MERN stack
              to create interfaces seamlessly blending functionality with
              aesthetics. <br/><br/> I am committed to continuous learning, and staying
              updated with industry trends to incorporate the latest
              advancements into my projects. Collaboration is central to my
              approach, as I thrive in cross-functional teams where diverse
              perspectives drive innovation. Let&rsquo;s work together to reimagine
              the digital landscape and create impactful web solutions.
            </p>
            <button className="btn btn-outline btn-primary mr-3"> <span className="text-white">Resume</span>  <img className="h-7" src={download} alt="" /> </button>
            <button className="btn btn-primary">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
