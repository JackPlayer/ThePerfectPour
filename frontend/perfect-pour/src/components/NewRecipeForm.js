/**
 * NewRecipeForm.js
 * React component for creating a new recipe
 */
import React, { useState } from 'react';
import HopForm from './HopForm';
import GrainForm from './GrainForm';

const NewRecipeForm = () => {
  const [hops, setHops] = useState([]);
  const [grains, setGrains] = useState([]);

  return (
    <form id="recipe-form">
      <p>Create a new recipe by filling out the contents below</p>
      <div className="form-field">
        <label>Recipe Name</label>
        <input type="text" />
      </div>

      <div className="form-field">
        <label>Beer Style</label>
        <input type="text" />
      </div>

      <div className="form-field">
        <label>Type</label>
        <select>
          <option value="all-grain">All-Grain</option>
          <option value="extract">Extract</option>
        </select>
      </div>

      <div className="form-field">
        <label>Description</label>
        <textarea rows="4">

        </textarea>
      </div>
      <HopForm hops={hops} setHops={setHops} />
      <GrainForm grains={grains} setGrains={setGrains} />
      <button type="submit" className="btn-form">Create</button>
    </form>
  );
};

export default NewRecipeForm;
