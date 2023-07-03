import React, { useState } from 'react';
import { createRaffle } from '../services/raffle';

const Raffle: React.FC = () => {
  const [raffleName, setRaffleName] = useState('');
  const [raffleDescription, setRaffleDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleRaffleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRaffleName(event.target.value);
  };

  const handleRaffleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRaffleDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createRaffle(raffleName, raffleDescription);
      setMessage('Raffle created successfully');
    } catch (error) {
      setMessage('Error creating raffle');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Raffle Name:
          <input type="text" value={raffleName} onChange={handleRaffleNameChange} />
        </label>
        <label>
          Raffle Description:
          <input type="text" value={raffleDescription} onChange={handleRaffleDescriptionChange} />
        </label>
        <input type="submit" value="Create Raffle" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Raffle;