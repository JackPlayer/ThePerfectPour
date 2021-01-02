/**
 * Checks if the current date is after the input date
 *
 * @param {Date} date Date to check
 * @returns {boolean} true if the current date is after
 */
const isDateAfter = (date) => {
  const currDate = new Date();
  return currDate > date;
};

/**
 * Checks if the current date is before the input date
 *
 * @param {Date} date Date to check
 * @returns {boolean} true if the current date is before the input date
 */
const isDateBefore = (date) => {
  const currDate = new Date();
  return currDate < date;
};

/**
 * Is the current date between dateStart and dateEnd?
 *
 * @param {Date} dateStart Start
 * @param {Date} dateEnd End
 * @returns {boolean} true if the current date is between start and end
 */
const isDateBetween = (dateStart, dateEnd) => {
  const currDate = new Date();
  return currDate >= dateStart && currDate <= dateEnd;
};

export default { isDateAfter, isDateBefore, isDateBetween };
