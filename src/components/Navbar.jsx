import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar mx-10">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
