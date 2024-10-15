import "../App.css";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="d-flex flex-row container">
        <div className="card d-flex flex-column m-3 p-5">
          <div className="d-flex flex-row">
            <h4>Technologies I do</h4>
          </div>
          <div className="d-flex flex-row">
            <p>
              Full stack developer specializing in C# .Net applications, with
              Bootstrap and React for UI implementation. Below is a quick
              overview of my main technical skill sets
              <br /> and technologies I use.
            </p>
          </div>

          <p className="d-flex flex-row">icons, logos, names of tech</p>
          <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
            <div>
              <SiHtml5 size={50} />
            </div>
            <div>
              <SiCss3 size={50} />
            </div>
            <div>
              <SiBootstrap size={50} />
            </div>
            <div>
              <SiJavascript size={50} />
            </div>
            <div>
              <SiReact size={50} />
            </div>

            <div>
              <SiFigma size={50} />
            </div>

            <div>
              <SiDotnet size={50} />
            </div>
            <div>
              <SiMicrosoftsqlserver size={50} />
            </div>
            <div>
              <div>
                <SiGit size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
