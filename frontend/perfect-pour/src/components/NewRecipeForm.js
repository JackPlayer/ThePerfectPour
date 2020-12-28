import React, {useState} from 'react'
import { hopTypes } from '../data/beerData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

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

      <div className="form-field">
        <label>Type</label>
        <select>
          <option value="all-grain">All-Grain</option>
          <option value="extract">Extract</option>
        </select>
      </div>

      <h5>Hops</h5>
      <div className="hops-entry">
        <div className="form-field">
          <label>Hop Selector</label>
          <input placeholder="Filter" type="text" onChange={(e) => setHopFilter(e.target.value)}></input>
          <select>
            {renderHopOptions()}
          </select>
        </div>
        <div className="row">
          <div className="form-field">
            <label>Amount</label>
            <div>
              <input type="number"  min="0" />
              <span> oz</span>
            </div>   
          </div>

          <div className="form-field">
            <label>Timing</label>
            <div >
              <input type="number"  min="0" max="120"/>
              <span> min</span>
            </div>   
          </div>
        </div>
        
        <FontAwesomeIcon className="fa-icon" icon={faPlusCircle} />
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>Cascade</td>
            <td>1.5</td>
            <td>60</td>
            <td><FontAwesomeIcon icon={faMinusCircle} /></td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
      
    </form>
  )
}

export default NewRecipeForm