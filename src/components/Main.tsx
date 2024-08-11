import { BsCaretRightFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import "./Main.css";

export interface MainProps {
  className?: string;
  style?: React.CSSProperties;
}
const Main = () => {
  return (
    <>
      <div id="technologies" className=" d-flex flex-row ">
        <div className="card d-flex m-3 p-5">
          <h1>Viktor Ilie</h1>
          <h4>Full Stack Developer</h4>
          <p className="">
            I'm a software developer with passion to work on both frontend and
            backend. Specialized in react and developing my skills in C#. With
            experience for complex scalable web apps.
          </p>
          <p>
            <b>Want to know how I may help your project?</b>
          </p>
          <p>Check out my portfolio and my resume</p>
          <div className=" justify-content-center align-items-center">
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

export default Main;
