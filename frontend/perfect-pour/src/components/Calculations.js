import React from 'react'
import Page from './reusable/Page'

import CalculatorABV from './CalculatorABV'

const Calculations = ({navList, active}) => {
  return (
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
  )
}

export default Calculations