import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const GrainForm = ({ grains, setGrains }) => {
  const [grainInput, setGrain] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddGrain = () => {
    if (grainInput.length > 0 && amount.length > 0) {
      const newGrain = {
        name: grainInput,
        amount,
        id: uuidv4(),
      };
      setGrains(grains.concat(newGrain));
    }
  };

  const handleDeleteGrain = (id) => {
    const filteredGrains = grains.filter((grain) => grain.id !== id);
    setGrains(filteredGrains);
  };

  const renderAddedGrains = () => grains.map((grain) => (
    <tr key={grain.id}>
      <td>{grain.name}</td>
      <td>{grain.amount}</td>
      <td><FontAwesomeIcon onClick={() => handleDeleteGrain(grain.id)} icon={faMinusCircle} className="btn-fa"/></td>
    </tr>
  ));
  return (
        <>
            <h5>Grains</h5>
            <div className="grain-entry">
                <div className="form-field">
                    <label>Grain</label>
                    <input type="text" onChange={(e) => setGrain(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Amount</label>
                    <input type="number" onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <FontAwesomeIcon onClick={() => handleAddGrain()} className="fa-icon btn-fa" icon={faPlusCircle} />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderAddedGrains()}
                    </tbody>
                </table>
            </div>
        </>
  );
};

export default GrainForm;

GrainForm.propTypes = {
  setGrains: PropTypes.func,
  grains: PropTypes.arrayOf(PropTypes.object),
};
