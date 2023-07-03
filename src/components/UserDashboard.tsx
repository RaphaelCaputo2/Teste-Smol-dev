import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserData } from '../services/user';
import { auth } from '../services/firebase';

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getUserData(user.uid).then((userData) => {
          setUser(userData);
        });
      } else {
        history.push('/login');
      }
    });
  }, [history]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <p>Your email: {user.email}</p>
          <p>Your raffles: {user.raffles.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;