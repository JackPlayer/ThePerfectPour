

export const calculateABV = (startStandardGravity, finalStandardGravity) => {
  return (76.08 * (startStandardGravity-finalStandardGravity) / (1.775-startStandardGravity)) * (finalStandardGravity / 0.794)


}

export const platoToSg = (plato) => {
  return 1+ (plato / (258.6 - ( (plato/258.2) * 227.1) ) )
}

export const sgToPlato = (standardGravity) => {
  return (-1 * 616.868) + (1111.14 * standardGravity) - (630.272 * Math.pow(standardGravity, 2)) + (135.997 * Math.pow(standardGravity, 3))
}
