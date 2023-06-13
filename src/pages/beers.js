import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h2>List of Beers</h2>
      {beers.map((beer) => (
        <div key={beer._id}>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <img src={beer.image_url} alt={beer.name} />
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ListBeersPage;
