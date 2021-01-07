import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ message }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!message || message.length === 0) {
      setVisible(false);
      return;
    }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, message);

  if (!visible) return null;
  return (
        <div id="pop-up">
            <p>{message}</p>
        </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
};
