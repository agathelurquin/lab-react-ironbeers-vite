import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [oneBeer, setOneBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}/${beerId}`)
      .then((jsonRes) => setOneBeer(jsonRes.data))
      .catch((error) => console.error(error));
  }, []);

  if (!oneBeer) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <img src={oneBeer.image_url} alt={oneBeer.name} />
      <h2>{oneBeer.names}</h2>
      <p>{oneBeer.tagline}</p>
      <p>FIRST BREWED: {oneBeer.first_brewed}</p>
      <p>ATTENUATION LEVEL: {oneBeer.attenuation_level}</p>
      <p>DESCRIPTION: {oneBeer.description}</p>
      <p>Contributed by: {`${oneBeer.contributed_by}`}</p>
    </section>
  );
}

export default BeerDetailsPage;
