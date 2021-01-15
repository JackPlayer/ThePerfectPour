import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const PopUp = ({ message, setMessage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message || message.length === 0) {
      setVisible(false);
      return;
    }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      setMessage('');
    }, 4000);
  }, [message]);

  if (!visible) return null;
  return (
        <div id="pop-up">
            <FontAwesomeIcon icon={faInfoCircle} />
            <p>{message}</p>
        </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
};
