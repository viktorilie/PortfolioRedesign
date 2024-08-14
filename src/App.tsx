import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column">
          <Sidebar />
        </div>

        {/* 02 main-section #AboutMe */}
        <div className="d-flex flex-column justify-content-center right-container">
          <Main />
          <Skills />
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default App;
