/**
 * HopForm.js
 * React component for the hop form.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { hopTypes } from '../data/beerData';

const HopForm = ({ hops, setHops }) => {
  const [hopTiming, setHopTiming] = useState('');
  const [hopAmount, setHopAmount] = useState('');
  const [hopSelected, setHopSelected] = useState('');

  useEffect(() => {
    if (hopTypes) setHopSelected(hopTypes[0]);
  }, []);
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

  const renderHopSelector = () => {
    if (hopTypes.length > 0) {
      const hopList = hopTypes.map((hop) => {
        const hopKey = hop.replace(/\s+/g, '-').toLowerCase();
        return (
              <option value={hop} key={hopKey}>{hop}</option>
        );
      });
      return (
        <>
            <select onChange={(e) => setHopSelected(e.target.value)}>
            { hopList }
            </select>
        </>
      );
    }
    return (
          <p>Hop types failed to load!</p>
    );
  };

  const renderAddedHops = () => hops.map((hop) => (
          <tr key={hop.id}>
            <td>{hop.name}</td>
            <td>{hop.amount}</td>
            <td>{hop.time}</td>
            <td><FontAwesomeIcon onClick={() => handleDeleteHop(hop.id)} icon={faMinusCircle} className="btn-fa"/></td>
          </tr>
  ));
  return (
        <>
        <h5>Hops</h5>
      <div className="hops-entry">
        <div className="form-field">
          <label>Hop</label>
          { renderHopSelector() }
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
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {renderAddedHops()}
            </tbody>
        </table>
      </div>
      </>
  );
};

export default HopForm;

HopForm.propTypes = {
  setHops: PropTypes.func,
  hops: PropTypes.arrayOf(PropTypes.object),
};
