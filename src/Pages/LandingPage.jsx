import { Link } from "react-router-dom";
import "../App.css";

function LandingPage() {
  return (
    <header className="App-header">
      <h1>Welcome to Parag's Portfoliohub</h1><br />
      <p>This is a simple React application that demonstrates my projects.</p>
      <br />
      <article>
        <h3>
          Kindly take a note that this Portfolio is under development. It is not
          fully developed.
        </h3>
        Alot of chnages, corrections and debugging is yet to be implemented.
        Thanks
      </article>
      <Link to="/home">
        <button className="next-button">Go to Home</button>
      </Link>
    </header>
  );
}

export default LandingPage;
