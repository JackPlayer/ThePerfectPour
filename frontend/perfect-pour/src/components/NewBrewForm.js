/**
 * NewBrewForm.js
 * React component for starting a new brew
 */

import React from 'react';
import PropTypes from 'prop-types';

const NewBrewForm = ({ recipes }) => (
    <form id="brew-form">
      <p>Select the recipe you want to brew and click start!
        You can add recipes in the new recipe field.</p>
      <div className="form-field">
        <label>Recipe</label>
        <select>
          {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.name}>{recipe.name}</option>))}
        </select>
      </div>
      <button type="submit" className="btn-form">Start</button>
    </form>
);

export default NewBrewForm;

NewBrewForm.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};
