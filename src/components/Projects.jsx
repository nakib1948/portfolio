import summercampSrc from "../assets/summercampSRC.png";
import toySrc from "../assets/Toyscr.png";
import chefSrc from "../assets/chefSRC.jpg";
import rightArrow from "../assets/icons8-right-arrow-48.png";
import "./Project.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div id="projects">
      <p className="text-5xl text-blue-400 font-semibold my-10 text-center">
        My Recent Projects
      </p>
      <div className="grid m-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div
          className="card card-compact w-96  shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img src={summercampSrc} alt="Shoes" className="scrolling-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ArtisticCraftersCorner</h2>
            <p className="text-base">
              A MERN stack Project for an educational platform, facilitating
              instructor course proposals, student enrollment with payments, and
              admin-driven course refinement.
            </p>
            <div className="card-actions justify-end">
              <Link to="/artandcraft" className="btn btn-outline btn-primary ">
                {" "}
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card card-compact w-96  shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img src={toySrc} alt="Shoes" className="scrolling-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toys-Store</h2>
            <p className="text-base">
              A MERN stack e-commerce platform for superhero toys, with
              categorized listings, user-friendly navigation, seller management,
              and detailed toy info accessible through user login.
            </p>
            <div className="card-actions justify-end">
              <Link to="/toysstore" className="btn btn-outline btn-primary ">
                {" "}
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card card-compact w-96 shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img src={chefSrc} alt="Shoes" className="scrolling-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ChefTastyTreats</h2>
            <p className="text-base">
              A MERN stack project for an e-commerce platform to explore famous
              chefs&rsquo; recipes, showcasing profiles, detailed dishes, and
              personalized favorites, accessed securely via user login
            </p>
            <div className="card-actions justify-end">
              <Link to="/chefrecipe" className="btn btn-outline btn-primary ">
                {" "}
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
