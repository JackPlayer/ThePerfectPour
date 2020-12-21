import React from 'react'

const NewRecipeForm = () => {
  return (
    <form id="recipe-form">
      <p>Create a new recipe by filling out the contents below</p>
      <div className="form-field">
        <label>Name</label>
        <input type="text" />
      </div>
    </form>
  )
}

export default NewRecipeForm