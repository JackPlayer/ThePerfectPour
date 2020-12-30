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

const App = () => {
  const navList = ['home', 'history', 'calculations'];
  const [recipes, setRecipes] = useState([]);
  // const [brews, setBrews] = useState([]);

  const renderMainApp = () => (
      <Router >
        <div className="app">
          <Switch>
            <Route path="/login">
              <LoginRegister />
            </Route>
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

  // Unimplemented for now.
  /* const renderLogin = () => (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <LoginRegister />
            </Route>
            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </div>

      </Router>
  ); */

  return (
    renderMainApp()
  );
};

export default App;
