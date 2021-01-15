/**
 * NewRecipeForm.js
 * React component for creating a new recipe
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import HopForm from './HopForm';
import AdditionsForm from './AdditionsForm';

const NewRecipeForm = ({ recipes, setRecipes }) => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [type, setType] = useState('all-grain');
  const [description, setDescription] = useState('');
  const [hops, setHops] = useState([]);
  const [additions, setAdditions] = useState([]);

  const handleRecipeSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0
      || style.length === 0
    ) return;

    const newRecipe = {
      id: uuidv4(),
      name,
      style,
      type,
      description,
      hops,
      additions,
    };
    setRecipes(recipes.concat(newRecipe));
  };
  return (
    <form id="recipe-form" onSubmit={(e) => handleRecipeSubmit(e)}>
      <p>Create a new recipe by filling out the contents below</p>
      <div className="form-field">
        <label>Recipe Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Beer Style</label>
        <input type="text" onChange={(e) => setStyle(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Type</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="all-grain">All-Grain</option>
          <option value="extract">Extract</option>
        </select>
      </div>

      <div className="form-field">
        <label>Description</label>
        <textarea rows="4" onChange={(e) => setDescription(e.target.value)}>

        </textarea>
      </div>
      <HopForm hops={hops} setHops={setHops} />
      <AdditionsForm additions={additions} setAdditions={setAdditions} />
      <button type="submit" className="btn-form">Create</button>
    </form>
  );
};

export default NewRecipeForm;

NewRecipeForm.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  setRecipes: PropTypes.func,
};
