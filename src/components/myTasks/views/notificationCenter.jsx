import React from 'react';
import PropTypes from 'prop-types';
import '../css/notificationCenter.scss';

const notificationCenter = ({ onClose }) => (
  <div className="notification-center-wrapper">
      Notification Center;
    <button
      className="close-noitification-center"
      onClick={onClose}
    >close
    </button>
  </div>
);

notificationCenter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default notificationCenter;
