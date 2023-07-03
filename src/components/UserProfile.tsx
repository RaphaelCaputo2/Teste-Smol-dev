import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserProfile } from '../services/user';
import '../styles/UserProfile.css';

interface UserProfileProps {
  userId: string;
}

interface UserProfileState {
  name: string;
  email: string;
  raffles: Array<string>;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [userProfile, setUserProfile] = useState<UserProfileState>({ name: '', email: '', raffles: [] });
  const history = useHistory();

  useEffect(() => {
    getUserProfile(userId)
      .then(profile => setUserProfile(profile))
      .catch(err => {
        console.error(err);
        history.push('/login');
      });
  }, [userId, history]);

  return (
    <div className="UserProfile">
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <h3>Raffles Participated</h3>
      <ul>
        {userProfile.raffles.map(raffle => (
          <li key={raffle}>{raffle}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;