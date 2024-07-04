import ProgressBar from "@ramonak/react-progress-bar";
import Loader from "./shared/Loader";
import { useAllSkillQuery } from "../redux/api/skillApi";
import { Line } from 'rc-progress';
const Skills = () => {
  const { data, isLoading } = useAllSkillQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
 
  return (
    <div
      className="pb-10 md:mx-20 lg:mx-20"
      data-aos="zoom-in-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <p className="text-5xl text-blue-400 font-semibold my-10 text-center">
        My Skills
      </p>
      <div className="bg-blue-300 h-1 w-24 mx-auto mt-1"></div>
      <div>
        <div className="grid m-5  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          { data?.data.map((skill, index) => (
            <div key={index}>
              <p className="text-xl pl-2 font-bold mb-2">{skill.name}</p>
              {/* <ProgressBar
                completed={skill.percentage + "%"}
                height="30px"
                baseBgColor="#FFFFFF"
                labelColor="#e80909#FFFFFF"
                transitionDuration="2s"
                animateOnRender
              /> */}
              <Line percent={skill.percentage} strokeWidth={6} trailWidth={5} strokeColor="#0051cb" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
