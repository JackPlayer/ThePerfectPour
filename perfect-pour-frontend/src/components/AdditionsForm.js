import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const AdditionsForm = ({ additions, setAdditions }) => {
  const [additionInput, setAdditionsInput] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddAdditions = () => {
    if (additionInput.length > 0 && amount.length > 0) {
      const newAddition = {
        name: additionInput,
        amount,
        id: uuidv4(),
      };
      setAdditions(additions.concat(newAddition));
    }
  };

  const handleDeleteAdditions = (id) => {
    const filteredAdditions = additions.filter((addition) => addition.id !== id);
    setAdditions(filteredAdditions);
  };

  const renderAddedAdditions = () => additions.map((addition) => (
    <tr key={addition.id}>
      <td>{addition.name}</td>
      <td>{addition.amount}</td>
      <td><FontAwesomeIcon onClick={() => handleDeleteAdditions(addition.id)} icon={faMinusCircle} className="btn-fa"/></td>
    </tr>
  ));
  return (
        <>
            <h5>Additions</h5>
            <div className="grain-entry">
                <div className="form-field">
                    <label>Addition</label>
                    <input type="text" onChange={(e) => setAdditionsInput(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Amount</label>
                    <input type="text" onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <FontAwesomeIcon onClick={() => handleAddAdditions()} className="fa-icon btn-fa" icon={faPlusCircle} />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderAddedAdditions()}
                    </tbody>
                </table>
            </div>
        </>
  );
};

export default AdditionsForm;

AdditionsForm.propTypes = {
  setAdditions: PropTypes.func,
  additions: PropTypes.arrayOf(PropTypes.object),
};
