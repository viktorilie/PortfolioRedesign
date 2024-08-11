import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import { RiArrowRightWideLine } from "react-icons/ri";

function App() {
  return (
    <>
      <div className="d-flex flex-row ">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column ">
          <Sidebar />
        </div>

        {/* 02-main section #AboutMe */}
        <div className="d-flex flex-column  main-section">
          <Main />

          {/* cards */}
          <div className="d-flex flex-row">
            {/* card-1 */}
            <div className="card d-flex m-3 p-5">
              <p className="card-title fs-3 fw-bold">Technologies I do</p>
              <p className="d-flex flex-row">icons, logos, names of tech</p>
              <p className="d-flex flex-row">icons, logos, names of tech</p>
            </div>
          </div>
          {/* card-2 */}
          <div className="card d-flex m-3 p-5">
            <h2>Portfolio</h2>
            <h4>Projects</h4>
            <div className="d-flex flex-row">
              <div>project 1</div>
              <div>project 2</div>
            </div>
            <div className="d-flex flex-row">
              <div>project 3</div>
              <div>project 4</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column  main-section">Portfolio</div>
    </>
  );
}

export default App;
