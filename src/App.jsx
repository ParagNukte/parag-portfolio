import "./App.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SkillCloud from "./pages/SkillCloud";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
// import SpotlightEffect from "./pages/Spotlight";/

function App() {
  return (
    <div>
      <ScrollMenu>
        <LandingPage />
        <Home />
        <SkillCloud />
        <Projects />
        <AboutMe />
      </ScrollMenu>
    </div>
  );
}

export default App;
