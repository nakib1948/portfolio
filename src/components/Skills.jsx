import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
  return (
    <div className="pb-10 md:mx-20 lg:mx-20">
      <p className="text-5xl text-blue-400 font-semibold my-10 text-center">
        My Skills
      </p>

      <div className="grid m-5  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        <div>
          <p className="text-xl pl-2 font-bold mb-2">HTML</p>
          <ProgressBar
            completed={95}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
        <div>
          <p className="text-xl pl-2 font-bold mb-2">CSS</p>
          <ProgressBar
            completed={90}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
        <div>
          <p className="text-xl pl-2 font-bold mb-2">Bootstrap</p>
          <ProgressBar
            completed={90}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
        <div>
          <p className="text-xl pl-2 font-bold mb-2">TAILWINDCSS</p>
          <ProgressBar
            completed={85}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
        <div>
          <p className="text-xl pl-2 font-bold mb-2">C++</p>
          <ProgressBar
            completed={85}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
        <div>
          <p className="text-xl pl-2 font-bold mb-2">JavaScript</p>
          <ProgressBar
            completed={85}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">REACTJS</p>
          <ProgressBar
            completed={80}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">FIREBASE</p>
          <ProgressBar
            completed={70}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">MONGODB</p>
          <ProgressBar
            completed={65}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">NODEJS</p>
          <ProgressBar
            completed={60}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">EXPRESSJS</p>
          <ProgressBar
            completed={50}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">TYPESCRIPT</p>
          <ProgressBar
            completed={20}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>

        <div>
          <p className="text-xl pl-2 font-bold mb-2">NEXTJS</p>
          <ProgressBar
            completed={30}
            height="30px"
            baseBgColor="#FFFFFF"
            labelColor="#e80909#FFFFFF"
            transitionDuration="2s"
            animateOnRender
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
