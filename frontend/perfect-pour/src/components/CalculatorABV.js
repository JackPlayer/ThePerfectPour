import React, { useState } from 'react'
import {calculateABV, platoToSg } from '../calculators/calc-abv'

const CalculatorABV = () => {
  const [abv, setABV] = useState('')
  const [unit, setUnit] = useState('sg')
  const [originalGravity, setOg] = useState(0)
  const [finalGravity, setFg] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("OG", originalGravity)
    console.log("FG", finalGravity)
    console.log(calculateABV(Number(originalGravity), Number(finalGravity)))
    try {
      if (unit === 'plato') {
        setABV(`${calculateABV(platoToSg(Number(originalGravity)), platoToSg(Number(finalGravity))).toFixed(2)}%`)
      } else {
        setABV(`${calculateABV(Number(originalGravity), Number(finalGravity)).toFixed(2)}%`)
      }
    } catch (e) {
      setABV("N/A (Input Error)")
    }
    

  }

  return (
    <div id="calculator-abv">
      <p>This calculator finds the alcohol by volume of your homebrew from its original gravity and final gravity. Units can be in standard gravity or degrees of plato.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Unit</label>
          <select onChange={(e) => setUnit(e.target.value)}>
            <option value="sg">Standard Gravity (sg)</option>
            <option value="plato">Plato</option>
          </select>
        </div>
        
        <div className="form-field">
          <label>Original Gravity</label>
          <input type="number" step="0.001" onChange={(e) => setOg(e.target.value)}></input>
        </div>
        <div className="form-field">
          <label>Final Gravity</label>
          <input type="number" step="0.001" onChange={(e) => setFg(e.target.value)}></input>
        </div>

        <button type="submit">Calculate</button>

        <p><strong>Alcohol By Volume ({unit}): {abv}</strong></p>
      </form>

      
    </div>
  )
}

export default CalculatorABV