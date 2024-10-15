import { BsCaretRightFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import "./MainCard.css";

const MainCard = () => {
  return (
    <>
      <div className="d-flex flex-row container">
        <div className="card d-flex flex-column m-3 p-5">
          <div className="">
            <h1>Viktor Ilie</h1>
            <h5>
              <b>Full Stack Developer</b>
            </h5>
          </div>
          <div>
            <p>
              I'm a software developer with passion to work on both frontend and
              backend. Specialized in react and developing my skills in C#. With
              experience for complex scalable web apps.
            </p>
          </div>
          <div className="py-0 d-flex ">
            <p>
              <b>Want to know how I may help your project?</b>
              <br />
              Check out my portfolio and my resume
            </p>
          </div>
          <div className="align-items-center jus">
            <button className="btn-portfolio">
              <BsCaretRightFill className="mx-1" />
              View my Portfolio
            </button>
            <button className="btn-resume">
              <BsFileEarmarkCode className="mx-2" size={20} />
              View my Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
