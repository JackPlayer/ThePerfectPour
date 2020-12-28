import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Page from './reusable/Page';

const History = ({ navList, active }) => (
    <Page active={active} pageTitle="History" navList={navList}>
      <div id="history-page">
        <div id="brewing">
          <h2 className="sub-title">
            Brewing
          </h2>
          <div className="content-box" id="brewing-content">
            <table>
              <thead>
                <th>Name</th>
                <th>Style</th>
                <th>Size</th>
                <th>Started</th>
                <th>Finished</th>
              </thead>
              <tbody>
                <tr>
                  <td>Beer1</td>
                  <td>Stout</td>
                  <td>5 gal</td>
                  <td>December 20, 2020</td>
                  <td>Beer1</td>
                </tr>

                <tr>
                  <td>Beer2</td>
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
                  <td>Beer3</td>
                </tr>
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
                 <tr>
                  <td>Irish Stout</td>
                  <td>Stout</td>
                  <td><FontAwesomeIcon icon={faSearch}/></td>
                 </tr>
                 <tr>
                  <td>Christmas IPA</td>
                  <td>New England IPA</td>
                  <td><FontAwesomeIcon icon={faSearch}/></td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </div>
    </Page>
);

export default History;

History.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
};
