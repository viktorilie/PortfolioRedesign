import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainCard from "./components/MainCard";
import Skills from "./components/Skills";

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
        </main>
      </div>
    </>
  );
}

export default App;
