import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home_page">
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beers</Link>
      <Link to="/new-beer">New Beers</Link>
    </div>
  );
}

export default HomePage;
