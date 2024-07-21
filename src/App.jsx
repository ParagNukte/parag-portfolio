import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import ProjectsDisplay from "./components/ProjectsDisplay";
import ContextApp from "./Projects/ContextAPI/src/App";
// import MegablogApp from "./Projects/MegaBlog/src/App";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectsDisplay />} />
          <Route path="/projects/contextapi" element={<ContextApp />} />
          {/* <Route path="/projects/megablog" element={<MegablogApp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
