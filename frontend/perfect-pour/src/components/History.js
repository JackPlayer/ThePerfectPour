import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Page from './reusable/Page';

const History = ({ navList, active, recipes }) => {
  const renderRecipes = () => recipes.map((recipe) => (
        <tr key={recipe.id}>
          <td>{recipe.name}</td>
          <td>{recipe.style}</td>
          <td><FontAwesomeIcon icon={faSearch}/></td>
        </tr>
  ));
  return (
    <Page active={active} pageTitle="History" navList={navList}>
      <div id="history-page">
        <div id="brewing">
          <h2 className="sub-title">
            Brewing
          </h2>
          <div className="content-box" id="brewing-content">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Style</th>
                  <th>Size</th>
                  <th>Started</th>
                  <th>Finished</th>
                </tr>

              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
        <div id="recipes">
          <h2 className="sub-title">
            Recipes
          </h2>
          <div className="content-box" id="recipe-content">
             <table>
               <thead>
                 <th>Name</th>
                 <th>Style</th>
                 <th>Info</th>
               </thead>
               <tbody>
                 {renderRecipes()}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default History;

History.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.object),
};
