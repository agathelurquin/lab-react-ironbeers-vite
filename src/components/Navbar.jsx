import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="src/assets/home-icon.png"
          alt="home-icon"
          className="navbar"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
