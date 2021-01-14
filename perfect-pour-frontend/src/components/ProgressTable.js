import React from 'react';
import PropTypes from 'prop-types';

const ProgressTable = ({
  brews, name, icon, finalStep,
}) => {
  const renderRows = () => brews.map((brew) => (
        <tr key={brew.id}>
          <td>{brew.name}</td>
          <td>{brew.style}</td>
          <td>{brew.started}</td>
          <td>{brew.next}</td>
        </tr>
  ));

  const renderTable = () => {
    if (brews.length === 0) {
      return <p>Nothing yet...</p>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Style</th>
            <th>Started</th>
            {finalStep && <th>Finished</th>}
            {!finalStep && <th>Next Step</th>}
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    );
  };

  return (
    <div className="progress-table">
      <div className="progress-title">
        <img src={icon} alt={`icon for ${name}`} /> <h3>{name}</h3>
      </div>
      {renderTable()}
    </div>
  );
};
export default ProgressTable;

ProgressTable.propTypes = {
  brews: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  finalStep: PropTypes.bool,
  icon: PropTypes.string,
};
