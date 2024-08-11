import "./Sidebar.css";
import { BsFilePersonFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import { BsEnvelopePaperFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <img
          className="sidebarimage shadow-lg"
          src="../public/images/IMG_0013.JPG"
        />
      </div>
      <div className="sidenavlinks">
        <div className="list-group ">
          <ul className="navbar-nav flex-column text-start">
            <li className="nav-item">
              <a className="nav-link active ps-5" href="#">
                <BsFilePersonFill className="mx-2" size={20} />
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ps-5" href="#">
                <BsLaptopFill className="mx-2" size={20} />
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-5" href="#">
                <BsBriefcaseFill className="mx-2" size={20} />
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-5" href="#">
                <BsFileEarmarkCode className="mx-2" size={20} />
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active ps-5" href="index.html">
                <BsEnvelopePaperFill className="mx-2" size={20} />
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon-links"></div>
    </>
  );
};

export default Sidebar;
