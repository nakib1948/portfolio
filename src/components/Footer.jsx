import { HashLink } from "react-router-hash-link";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/icons8-github-50.png";
const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-gray-600 rounded">
        <nav className="grid grid-flow-col gap-4">
          <HashLink to="#about" className=" text-base font-semibold">
            ABOUT
          </HashLink>
          <HashLink to="#projects" className="text-base font-semibold">
            PROJECTS
          </HashLink>
          <HashLink to="#contact" className=" text-base font-semibold">
            CONTACT
          </HashLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/hayat-hossain7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="h-10" alt="" />
            </a>
            <a
              href="https://www.facebook.com/HayatHossainNChowdhury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="h-10" alt="" />
            </a>
            <a
              href="https://github.com/nakib1948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="h-10" alt="" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hayat
            Hossain
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
