import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerAdmin } from '../services/admin';
import '../styles/AdminRegister.css';

const AdminRegister: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerAdmin(email, password);
      history.push('/admin-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-register">
      <h2>Admin Registration</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;