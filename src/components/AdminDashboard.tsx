import React, { useEffect, useState } from 'react';
import { getRaffles } from '../services/raffle';
import '../styles/AdminDashboard.css';

interface Raffle {
  id: string;
  name: string;
  description: string;
  participants: number;
}

const AdminDashboard: React.FC = () => {
  const [raffles, setRaffles] = useState<Raffle[]>([]);

  useEffect(() => {
    fetchRaffles();
  }, []);

  const fetchRaffles = async () => {
    const raffles = await getRaffles();
    setRaffles(raffles);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="raffles-list">
        {raffles.map((raffle) => (
          <div key={raffle.id} className="raffle-item">
            <h2>{raffle.name}</h2>
            <p>{raffle.description}</p>
            <p>Participants: {raffle.participants}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;