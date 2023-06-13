import React, { useState } from 'react';
import axios from 'axios';

const NewBeerForm = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [addedBeer, setAddedBeer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      attenuation_level: Number(attenuationLevel),
      contributed_by: contributedBy,
    };

    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
      const addedBeerData = response.data;
      console.log('New beer created:', addedBeerData);
      setSuccessMessage('New beer added successfully to the database!');
      setAddedBeer(addedBeerData);
    } catch (error) {
      console.error('Error creating new beer:', error);
      // Handle error
    }

    // Reset form fields
    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setAttenuationLevel('');
    setContributedBy('');
  };

  return (
    <div>
      <h2>Create a New Beer</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Tagline:</label>
          <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>First Brewed:</label>
          <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} required />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} required />
        </div>
        <div>
          <label>Contributed By:</label>
          <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} required />
        </div>
        <button type="submit">Create Beer</button>
      </form>
      {addedBeer && (
        <div>
          <h3>Added Beer:</h3>
          <h4>{addedBeer.name}</h4>
          <p>{addedBeer.tagline}</p>
          
        </div>
      )}
    </div>
  );
};

export default NewBeerForm;
