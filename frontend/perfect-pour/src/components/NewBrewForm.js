import React from 'react';

const NewBrewForm = () => (
    <form id="brew-form">
      <p>Select the recipe you want to brew and click start!
        You can add recipes in the new recipe field.</p>
      <div className="form-field">
        <label>Recipe</label>
        <select>
          <option value="recipe-1">Irish Stout</option>
          <option value="recipe-2">Irish Stout 2.0</option>
          <option value="recipe-3">New England IPA</option>
          <option value="recipe-4">Raspberry Wheat Ale, Phillips Clone</option>
        </select>
      </div>
      <button type="submit">Start</button>
    </form>
);

export default NewBrewForm;
