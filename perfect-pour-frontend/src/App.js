/**
 * App.js
 * React component for main application entrypoint
 */

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import LoginRegister from './components/LoginRegister';
import History from './components/History';
import Home from './components/Home';
import Calculations from './components/Calculations';
import PopUp from './components/PopUp';

import { GET_RECIPES } from './queries';

const App = () => {
  const navList = ['home', 'history', 'calculations'];
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [getRecipes, recipeQuery] = useLazyQuery(GET_RECIPES);
  useEffect(() => {
    if (user != null) {
      getRecipes({ variables: { userID: user.id } });
    }
  }, [user]);

  useEffect(() => {
    if (recipeQuery.data !== undefined) {
      setRecipes(recipeQuery.data.getRecipes);
    }
  }, [recipeQuery.loading]);

  const renderMainApp = () => (
      <Router >
        <div className="app">
          <Switch>
            <Route path="/home">
              <Home active="home" setMessage={setMessage} setUser={setUser} user ={user} setRecipes={setRecipes} recipes={recipes} navList={navList} />
            </Route>
            <Route path="/history">
              <History recipes={recipes} setUser={setUser} active="history" navList={navList} />
            </Route>
            <Route path="/calculations">
              <Calculations active="calculations" setUser={setUser} navList={navList} />
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
      {(!user || !user.token) && renderLogin()}
      {(user && user.token) && renderMainApp()}
    </div>
  );
};

export default App;
