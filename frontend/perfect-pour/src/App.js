/**
 * App.js
 * React component for main application entrypoint
 */

import './styles/main.scss';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import History from './components/History';
import Home from './components/Home';
import Calculations from './components/Calculations';
import PopUp from './components/PopUp';

const App = () => {
  const navList = ['home', 'history', 'calculations'];
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  const renderMainApp = () => (
      <Router >
        <div className="app">
          <Switch>
            <Route path="/home">
              <Home active="home" setRecipes={setRecipes} recipes={recipes} navList={navList} />
            </Route>
            <Route path="/history">
              <History recipes={recipes} active="history" navList={navList} />
            </Route>
            <Route path="/calculations">
              <Calculations active="calculations" navList={navList} />
            </Route>
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </Router>
  );

  const renderLogin = () => (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginRegister setUser={setUser} setMessage={setMessage}/>
          </Route>
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
  );

  return (
    <div className="app">
      <PopUp message={message} setMessage={setMessage}/>
      {!user && renderLogin()}
      {user && renderMainApp()}
    </div>
  );
};

export default App;
