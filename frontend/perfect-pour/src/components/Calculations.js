/**
 * Calculations.js
 * React component for calculations page
 */
import React from 'react';
import PropTypes from 'prop-types';

import Page from './reusable/Page';
import CalculatorABV from './CalculatorABV';

const Calculations = ({ navList, active }) => (
    <Page active={active} pageTitle="Calculations" navList={navList}>
      <h2 className="sub-title">
        Alcohol By Volume
      </h2>
      <div id="calculator-page">
        <div id="calculator-box">
          <div className="content-box">
            <CalculatorABV />
          </div>
        </div>
        <div id="calculator-selector">
          <select name="calculators" size="2">
            <option value="gravity" className="selected">ABV</option>
          </select>
        </div>
      </div>
    </Page>
);

export default Calculations;

Calculations.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
};
