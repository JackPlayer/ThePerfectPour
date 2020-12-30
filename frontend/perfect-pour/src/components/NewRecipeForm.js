/**
 * NewRecipeForm.js
 * React component for creating a new recipe
 */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { hopTypes } from '../data/beerData';

const NewRecipeForm = () => {
  const [hops, setHops] = useState([]);
  const [hopFilter, setHopFilter] = useState('');
  const [hopTiming, setHopTiming] = useState('');
  const [hopAmount, setHopAmount] = useState('');
  const [hopSelected, setHopSelected] = useState('');

  const handleAddHop = () => {
    if (hopTiming.length === 0 || hopAmount.length === 0 || hopSelected.length === 0) return;
    const newHop = {
      id: uuidv4(),
      name: hopSelected,
      time: hopTiming,
      amount: hopAmount,
    };
    setHops(hops.concat(newHop));
  };

  const handleDeleteHop = (id) => {
    const newHops = hops.filter((hop) => hop.id !== id);
    setHops(newHops);
  };

  const renderAddedHops = () => hops.map((hop) => (
      <tr key={hop.id}>
        <td>{hop.name}</td>
        <td>{hop.amount}</td>
        <td>{hop.time}</td>
        <td><FontAwesomeIcon onClick={() => handleDeleteHop(hop.id)} icon={faMinusCircle} className="btn-fa"/></td>
      </tr>
  ));

  const renderHopOptions = () => {
    if (hopTypes.length > 0) {
      return hopTypes.filter((hop) => hop.includes(hopFilter)).map((hop) => {
        const hopKey = hop.replace(/\s+/g, '-').toLowerCase();
        return (
          <option value={hop} key={hopKey}>{hop}</option>
        );
      });
    }
    return (
      <p>Hop types failed to load!</p>
    );
  };

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
          <select onChange={(e) => setHopSelected(e.target.value)}>
            {renderHopOptions()}
          </select>
        </div>
        <div className="row">
          <div className="form-field">
            <label>Amount</label>
            <div>
              <input onChange={(e) => setHopAmount(e.target.value)} type="number" min="0" />
              <span> oz</span>
            </div>
          </div>

          <div className="form-field">
            <label>Timing</label>
            <div >
              <input onChange={(e) => setHopTiming(e.target.value)} type="number" min="0" max="120"/>
              <span> min</span>
            </div>
          </div>
        </div>

        <FontAwesomeIcon onClick={() => handleAddHop()} className="fa-icon btn-fa" icon={faPlusCircle} />
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
          {renderAddedHops()}
        </table>
      </div>

    </form>
  );
};

export default NewRecipeForm;
