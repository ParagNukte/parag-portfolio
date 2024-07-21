import "../App.css"
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/projects">Projects </Link>
          </li>
          <li>
            <Link to="/">about</Link>
          </li>
        </ul>
      </nav>

      <div className="home-content">
        <h2>Welcome to the Home Page</h2>
        <p>This is where you can find more about Parag's work.</p>
      </div>
    </div>
  );
}

export default Home;
