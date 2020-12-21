import React, {useState} from 'react'
import { hopTypes } from '../data/beerData'

const NewRecipeForm = () => {
  const [hopFilter, setHopFilter] = useState('')

  const renderHopOptions = () => {
    if (hopTypes.length > 0) {
      return hopTypes.filter((hop) => hop.includes(hopFilter)).map((hop) => {
        const hopKey = hop.replace(/\s+/g, '-').toLowerCase();
        return (
          <option value={hop} key={hopKey}>{hop}</option> 
        )
      })
    }
  }
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

      <h5>Hops</h5>
      <div className="form-field">
        <label>Hop Selector</label>
        <input placeholder="Filter" type="text" onChange={(e) => setHopFilter(e.target.value)}></input>
        <select>
          {renderHopOptions()}
        </select>
      </div>
    </form>
  )
}

export default NewRecipeForm