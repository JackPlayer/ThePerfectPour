/**
 * Home.js
 * React component for the home page.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Page from './reusable/Page';
import NewBrewForm from './NewBrewForm';
import NewRecipeForm from './NewRecipeForm';

import hops from '../assets/hops.svg';
import wheat from '../assets/wheat.svg';
import carbonation from '../assets/reaction.svg';
import beers from '../assets/beers.svg';

const Home = ({ navList, active }) => {
  const username = 'Jack';
  return (
    <Page active={active} pageTitle={`Welcome back ${username}...`} navList={navList}>
      <div id="home-page">
        <div id="progress-section">
          <h2 className="sub-title">In progress</h2>
            <div className="content-box" id="progress-box">
              <div className="progress-table">
                <div className="progress-title">
                  <img src={hops} alt="hops" /> <h3>Primary Fermentation</h3>

                </div>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Started</th>
                    <th>Next Step</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beer1</td>
                      <td>Stout</td>
                      <td>December 20, 2020</td>
                      <td>Beer1</td>
                    </tr>

                    <tr>
                      <td>Beer2</td>
                      <td>Beer2</td>
                      <td>Beer2</td>
                      <td>Beer2</td>
                    </tr>
                    <tr>
                      <td>Beer3</td>
                      <td>Beer3</td>
                      <td>Beer3</td>
                      <td>Beer3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="progress-table">
                <div className="progress-title">
                  <img src={wheat} alt="wheat" /> <h3>Secondary Fermentation</h3>
                </div>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Started</th>
                    <th>Next Step</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beer1</td>
                      <td>Stout</td>
                      <td>December 20, 2020</td>
                      <td>Beer1</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="progress-table">
                <div className="progress-title">
                  <img src={carbonation} alt="carbonation" /> <h3>Carbonation</h3>
                </div>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Started</th>
                    <th>Next Step</th>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              <div className="progress-table">
              <div className="progress-title">
                  <img src={beers} alt="beers" /> <h3>Drink</h3>
                </div>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Finished</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beer1</td>
                      <td>Stout</td>
                      <td>December 20, 2020</td>
                    </tr>

                    <tr>
                      <td>Beer2</td>
                      <td>Beer2</td>
                      <td>Beer2</td>
                    </tr>
                    <tr>
                      <td>Beer3</td>
                      <td>Beer3</td>
                      <td>Beer3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>

        <div id="create-section">
          <div id="create-recipe">
            <h2 className="sub-title">New Recipe</h2>
            <div className="content-box">
              <NewRecipeForm />
            </div>
          </div>
          <div id="create-brew">
            <h2 className="sub-title">New Brew</h2>
            <div className="content-box">
              <NewBrewForm />
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
};
