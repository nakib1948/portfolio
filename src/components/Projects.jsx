import summercampSrc from "../assets/summercampSRC.png";
import toySrc from "../assets/Toyscr.png";
import lfbg from "../assets/lostandfound/lfbg.png";
import bookvalleySrc from "../assets/bookValley/bookvalleycover.png";
import bookManagementSrc from "../assets/bookManagement/img1.png";
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
          className="card card-compact md:w-96 lg:w-96 sm:w-full shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img src={lfbg} alt="Shoes" className="scrolling-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lost & Found Exchange</h2>
            <p className="text-base">
              A NextJs Website Lost and Found System enables users to report and
              search for lost or found items securely. After signing up, users
              can access the dashboard to submit detailed reports and browse
              through listings. Verified claims are managed by the admin,
              ensuring items are returned to their rightful owners while
              maintaining a smooth and secure platform.
            </p>
            <div className="card-actions justify-end">
              <Link to="/lostAndFound" className="btn btn-outline btn-primary ">
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card card-compact md:w-96 lg:w-96 sm:w-full  shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img src={bookvalleySrc} alt="Shoes" className="scrolling-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Valley </h2>
            <p className="text-base">
              A MERN stack project, simplifies the reader-writer-publisher
              ecosystem by centralizing interactions. It opens avenues for new
              writers to connect with publishers and offers affordable e-books
              to readers
            </p>
            <div className="card-actions justify-end">
              <Link to="/bookvalley" className="btn btn-outline btn-primary ">
                {" "}
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card card-compact md:w-96 lg:w-96 sm:w-full  shadow-xl"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure className="scrollable-image-container">
            <img
              src={bookManagementSrc}
              alt="Shoes"
              className="scrolling-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Management Dashboard</h2>
            <p className="text-base">
              A MERN stack project aims at a Book Management service with a Role
              System and Cart Functionality.
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/bookmanagement"
                className="btn btn-outline btn-primary "
              >
                {" "}
                <span className="text-white">Details</span>{" "}
                <img className="h-7" src={rightArrow} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card card-compact md:w-96 lg:w-96 sm:w-full  shadow-xl"
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
          className="card card-compact md:w-96 lg:w-96 sm:w-full shadow-xl"
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
      </div>
    </div>
  );
};

export default Projects;
