import "../App.css";
import { BsFilePersonFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="d-flex justify-content-center align-items-center ">
          <img
            className="sidebarimage shadow-lg rounded"
            src="../public/images/IMG_0013.JPG"
          />
        </div>
        <h3 className="text-center">Viktor Ilie</h3>
        <hr className=" mx-3" />

        {/* navlinks and icons */}
        <div className="ps-3">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsFilePersonFill className=" mx-3" size={24} />
                <small className="">About Me</small>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsBriefcaseFill className=" mx-3" size={24} />
                <small className="">Skills</small>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsLaptopFill className=" mx-3" size={24} />
                <small className="">Portfolio</small>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsFileEarmarkCode className=" mx-3" size={24} />
                <small className="">Resume</small>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsEnvelopePaperFill className=" mx-3" size={24} />
                <small className="">Contact me</small>
              </a>
            </li>
          </ul>
        </div>
        <hr className=" mx-3" />

        {/* social media links */}
        <div className="icon-links list-inline justify-content-center align-items-center px-1 mx-1">
          <li className="list-inline-item">
            <a className="nav-link" href="https://twitter.com/red_dev_vi">
              <BsTwitterX className="mx-2" size={24} />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/viktor-ilie/">
              <BsLinkedin className="mx-2" size={24} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="nav-link" href="https://github.com/viktorilie">
              <BsGithub className="mx-2" size={24} />
            </a>
          </li>
        </div>
        <hr className="mx-3" />
        <div className="py-3">
          <div className="px-4 mx-auto">
            <button
              type="submit"
              className="btn btn-outline-light w-100 hireme-button">
              <BsFillSendFill />
              <small>Hire me</small>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
