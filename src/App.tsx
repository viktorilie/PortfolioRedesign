import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Skills from "./components/Skills";
// import { RiArrowRightWideLine } from "react-icons/ri";

function App() {
  return (
    <>
      <div className="d-flex flex-row ">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column">
          <Sidebar />
        </div>

        {/* 02 main-section #AboutMe */}
        <div className="d-flex flex-column right-container">
          <Main />

          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
