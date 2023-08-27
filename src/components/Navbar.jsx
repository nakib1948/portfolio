import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar mx-10">
        <div className="navbar-start">
          <div className="dropdown">
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
             
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-[#7179e8] font-bold">HAYAT.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to='/' className="text-base font-semibold">HOME</Link>
           
            <Link className="mx-5 text-base font-semibold">ABOUT</Link>
            <Link className="text-base font-semibold">PROJECTS</Link>
            <Link className="mx-5 text-base font-semibold">CONTACT</Link>
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;