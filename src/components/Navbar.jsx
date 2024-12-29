import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-elem" to="/about">
          Shamanth Kuthpadi
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-elem" to="/about">
          about
        </Link>
        <Link className="navbar-elem" to="/projects">
          projects
        </Link>
        <Link className="navbar-elem" to="/contact">
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
