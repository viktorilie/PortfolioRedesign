import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column">
          <Sidebar />
        </div>

        {/* 02 main-section #AboutMe */}
        <div className="d-flex flex-column justify-content-center right-container"></div>
      </div>
    </>
  );
}

export default App;
