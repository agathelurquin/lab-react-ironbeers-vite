import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl = "https://ih-beers-api2.herokuapp.com/";
function AllBeersPage() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}beers`)
      .then((jsonRes) => setBeers(jsonRes.data))
      .catch((error) => console.error(error));
  }, []);

  // pourquoi on met null au lieu d'un empty array
  console.log(beers);
  if (!beers) {
    return <div> Loading...</div>;
  }
  return (
    <section className="all-beers">
      <h2>Our Collection</h2>
      {beers.map((beer) => {
        return (
          <section key={beer._id}>
            <img src={`${beer.image_url}`} alt={`${beer.name} logo`} />
            <h2>
              <Link to={`/${beer._id}`}>{beer.name}</Link>
            </h2>
            <p>{beer.tagline}</p>
            <p>Contributed by: {`${beer.contributed_by}`}</p>
          </section>
        );
      })}
    </section>
  );
}

export default AllBeersPage;
