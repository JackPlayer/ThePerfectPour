/**
 * Home.js
 * React component for the home page.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Page from './reusable/Page';
import NewBrewForm from './NewBrewForm';
import NewRecipeForm from './NewRecipeForm';
import ProgressTable from './ProgressTable';

import hops from '../assets/hops.svg';
import carbonation from '../assets/reaction.svg';
import beers from '../assets/beers.svg';

const Home = ({
  navList, active, recipes, setRecipes,
}) => {
  const username = 'Jack';
  return (
    <Page active={active} pageTitle={`Welcome back ${username}...`} navList={navList}>
      <div id="home-page">
        <div id="progress-section">
          <h2 className="sub-title">In progress</h2>
            <div className="content-box" id="progress-box">
              <ProgressTable brews={[]} icon={hops} name="Primary Fermentation" finalStep={false}/>
              <ProgressTable brews={[]} icon={carbonation} name="Carbonation" finalStep={false}/>
              <ProgressTable brews={[]} icon={beers} name="Drink" finalStep={true}/>

            </div>
        </div>

        <div id="create-section">
          <div id="create-recipe">
            <h2 className="sub-title">New Recipe</h2>
            <div className="content-box">
              <NewRecipeForm recipes={recipes} setRecipes={setRecipes}/>
            </div>
          </div>
          <div id="create-brew">
            <h2 className="sub-title">New Brew</h2>
            <div className="content-box">
              <NewBrewForm recipes={recipes}/>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;

Home.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.object),
  setRecipes: PropTypes.func,
};
