import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainCard from "./components/MainCard";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        {/* 01 sidebar */}
        <div className="side d-flex flex-column col-sm-2">
          <Sidebar />
        </div>

        {/* 02 main-section #AboutMe */}
        <div className="d-flex flex-column justify-content-center right-contain col-sm-10">
          <MainCard />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
