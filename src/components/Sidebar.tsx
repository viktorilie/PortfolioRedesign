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

const Sidebar = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <img
          className="sidebarimage shadow-lg rounded"
          src="../public/images/IMG_0013.JPG"
        />
      </div>
      <hr className=" mx-3" />
      <div className="ps-3">
        <ul className="navbar-nav flex-column text-start ps-5">
          <li className="nav-item">
            <a className="nav-link " href="#">
              <BsFilePersonFill className="mx-2" size={20} />
              About Me
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <BsBriefcaseFill className="mx-2" size={20} />
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="#">
              <BsLaptopFill className="mx-2" size={20} />
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="#">
              <BsFileEarmarkCode className="mx-2" size={20} />
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <BsEnvelopePaperFill className="mx-2" size={20} />
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <hr className=" mx-3" />

      <div className="icon-links list-inline justify-content-center align-items-center px-2 mx-auto">
        <li className="list-inline-item">
          <a className="nav-link" href="https://twitter.com/red_dev_vi">
            <BsTwitterX className="mx-2" size={20} />
          </a>
        </li>

        <li className="list-inline-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/viktor-ilie/">
            <BsLinkedin className="mx-2" size={20} />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="nav-link" href="https://github.com/viktorilie">
            <BsGithub className="mx-2" size={20} />
          </a>
        </li>
      </div>
      <hr className="mx-3" />
      <div className="py-2">
        <div className=" px-5 mx-auto">
          <button type="submit" className="btn btn-outline-light w-100">
            <BsFillSendFill className="" /> Hire me
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
