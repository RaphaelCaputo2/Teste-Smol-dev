import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminRegister from './components/AdminRegister';
import Raffle from './components/Raffle';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin-register" component={AdminRegister} />
        <Route path="/raffle" component={Raffle} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;