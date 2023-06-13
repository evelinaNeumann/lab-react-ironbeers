import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching beer details:', error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Beer Details</h2>
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Description: {beer.description}</p>
      <p>ABV: {beer.abv}</p>
      <p>IBU: {beer.ibu}</p>
      <p>Target FG: {beer.target_fg}</p>
      <p>Target OG: {beer.target_og}</p>
      <p>Contributed by: {beer.contributed_by}</p>
      <p>Image: <img src={beer.image_url} alt={beer.name} /></p>
      
    </div>
  );
};

export default BeerDetailsPage;
