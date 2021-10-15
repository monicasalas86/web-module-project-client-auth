import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {

  let isLoggenIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <header>
          <h1>F R I E N D S</h1>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
          <li>
            {isLoggenIn && <Link to='friendslist'>Friends List</Link>}
          </li>
        </ul>
        </header>
        <Switch>
          <PrivateRoute path='/friendslist' component={FriendsList}/>
          <PrivateRoute path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
