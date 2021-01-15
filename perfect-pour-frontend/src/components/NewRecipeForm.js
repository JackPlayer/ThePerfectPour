/**
 * NewRecipeForm.js
 * React component for creating a new recipe
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';

import { CREATE_RECIPE } from '../queries';
import HopForm from './HopForm';
import AdditionsForm from './AdditionsForm';

const NewRecipeForm = ({
  recipes, setRecipes, setMessage, user,
}) => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [type, setType] = useState('all-grain');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState(0);
  const [yeast, setYeast] = useState('');
  const [hops, setHops] = useState([]);
  const [additions, setAdditions] = useState([]);

  const [createRecipe] = useMutation(CREATE_RECIPE, {
    onError: () => {
      setMessage('Failed to create the recipe!');
    },

    onCompleted: () => {
      setMessage('Created new recipe.');
    },
  });

  const handleRecipeSubmit = async (e) => {
    e.preventDefault();
    if (
      name.length === 0
      || style.length === 0
      || type.length === 0
      || size === 0
    ) {
      setMessage('Required fields(*) must be filled!');
      return;
    }

    const newRecipe = {
      name,
      style,
      yeast,
      type,
      description,
      hops,
      size,
      additions,
    };
    console.log(additions);
    console.log(hops);
    await createRecipe({
      variables: {
        userID: user.id,
        recipeName: newRecipe.name,
        style: newRecipe.style,
        type: newRecipe.type,
        sizeGal: Number(newRecipe.size),
        yeast: newRecipe.yeast,
        description: newRecipe.description,
        hops: JSON.stringify({ hops }),
        additions: JSON.stringify({ additions }),
      },
    });
    setRecipes(recipes.concat(newRecipe));
  };
  return (
    <form id="recipe-form" onSubmit={(e) => handleRecipeSubmit(e)}>
      <p>Create a new recipe by filling out the contents below</p>
      <div className="form-field">
        <label>Recipe Name *</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Beer Style *</label>
        <input type="text" value={style} onChange={(e) => setStyle(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Type *</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="All-grain">All-Grain</option>
          <option value="Extract">Extract</option>
        </select>
      </div>

      <div className="form-field">
        <label>Size (Gallons) *</label>
        <input type="number" step="0.5" value={size} onChange={(e) => setSize(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Yeast</label>
        <input type="text" value={yeast} onChange={(e) => setYeast(e.target.value)}/>
      </div>

      <div className="form-field">
        <label>Description</label>
        <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)}>

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
  setMessage: PropTypes.func,
  user: PropTypes.object,
};
