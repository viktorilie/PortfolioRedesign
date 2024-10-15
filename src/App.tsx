import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainCard from "./components/MainCard";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="layout">
        <nav>
          <Sidebar />
        </nav>
        <main>
          <MainCard />
          <Skills />
          <Portfolio />
        </main>
      </div>
    </>
  );
}

export default App;
