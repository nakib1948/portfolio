import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar mx-10 mb-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <Link to="/" className="text-base font-semibold">
              HOME
            </Link>

            <HashLink to="#about" className=" text-base font-semibold">
              ABOUT
            </HashLink>
            <HashLink to="#projects" className="text-base font-semibold">
              PROJECTS
            </HashLink>
            <HashLink to="#contact" className=" text-base font-semibold">
              CONTACT
            </HashLink>
            <Link to="/blog" className="text-base font-semibold">
              BLOG
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-[#7179e8] font-bold">
          HAYAT HOSSAIN
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/" className="text-base font-semibold">
            HOME
          </Link>

          <HashLink to="#about" className="mx-5 text-base font-semibold">
            ABOUT
          </HashLink>
          <HashLink to="#projects" className="text-base font-semibold">
            PROJECTS
          </HashLink>
          <HashLink to="#contact" className="mx-5 text-base font-semibold">
            CONTACT
          </HashLink>
          <Link to="/blog" className="text-base font-semibold">
            BLOG
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
