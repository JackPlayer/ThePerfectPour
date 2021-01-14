/**
 * Calculates the alcohol by volume using the newer method from standard gravity
 *
 * @param startStandardGravity The starting standard gravity
 * @param finalStandardGravity The final standard gravity
 */

export const calculateABV = (startStandardGravity, finalStandardGravity) => (
  (76.08 * (startStandardGravity - finalStandardGravity))
  / (1.775 - startStandardGravity)) * (finalStandardGravity / 0.794);

/**
 * Converts degrees of plato to standard gravity
 *
 * @param plato Degrees of plato to convert
 * @returns standard gravity
 */

export const platoToSg = (plato) => 1 + (plato / (258.6 - ((plato / 258.2) * 227.1)));

/**
 * Converts standard gravity to degrees plato
 *
 * @param standardGravity Standard gravity (eg. 1.001)
 * @returns Degrees plato
 */

export const sgToPlato = (standardGravity) => (-1 * 616.868)
  + (1111.14 * standardGravity)
  - (630.272 * standardGravity ** 2)
  + (135.997 * standardGravity ** 3);
