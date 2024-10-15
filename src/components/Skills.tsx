import "./Skills.css";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiCsharp } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";

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
              overview of my main technical skill set, the tools, languages, and
              technologies I use.
            </p>
          </div>

          <div className="d-flex flex-row justify-content-around align-items-center pt-4 ">
            <div className="col-3">
              <SiHtml5 className="mx-1" size={50} />
              <SiCss3 className="mx-1" size={50} />
              <SiBootstrap className="mx-1" size={50} />
              <SiFigma className="mx-1" size={50} />
            </div>
            <div className="col-3">
              <SiJavascript className="mx-1" size={50} />
              <SiReact className="mx-1" size={50} />
              <SiGit className="mx-1" size={50} />
              <SiAzuredevops className="mx-1" size={50} />
            </div>

            <div className="col-3">
              <SiDotnet className="mx-1" size={50} />
              <SiMicrosoftsqlserver className="mx-1" size={50} />
              <SiCsharp className="mx-1" size={50} />
              <VscVscode className="mx-1" size={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
