import rightArrow from "../../assets/icons8-right-arrow-48.png";
import { useGetAllProjectQuery } from "../../redux/api/projectApi";
import Loader from "../shared/Loader";
import "./Project.css";
import { Link } from "react-router-dom";
const Projects = () => {
  const { data, isLoading, refetch } = useGetAllProjectQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="projects">
      <p className="text-5xl text-blue-400 font-semibold my-10 text-center">
        My Recent Projects
      </p>
      <div className="bg-blue-300 h-1 w-24 mx-auto mt-1"></div>
      <div className="grid m-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data?.data.map((project, index) => (
          <div
            key={index}
            className="card card-compact md:w-96 lg:w-96 sm:w-full shadow-xl"
            data-aos="flip-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <figure className="scrollable-image-container">
              <img src={project.coverImage} alt="project" className="scrolling-image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-base">
                {project.description}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/project/${project._id}`}
                  className="btn btn-outline btn-primary "
                >
                  <span className="text-white">Details</span>{" "}
                  <img className="h-7" src={rightArrow} alt="" />{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
