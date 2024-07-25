import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column">
          <Sidebar />
        </div>

        {/* main section */}
        <div id="technologies" className=" d-flex flex-column main-section">
          <div className="card">
            <h1>Viktor Ilie</h1>
            <h4>Full Stack Developer</h4>
            <p className="p-5 m-5">
              I'm a software developer with passion to work on both frontend and
              backend. Specialized in react and developing my skills in C#. With
              experience for complex scalable web apps.
            </p>
            <p>
              <b>Want to know how I may help your project?</b>
            </p>
            <p>Check out my portfolioand my resume</p>
            <button className="btn btn-outline-primary">my Resume`</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
