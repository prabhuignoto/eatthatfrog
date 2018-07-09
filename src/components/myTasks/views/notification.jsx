import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import '../css/notification.css';

const notification = ({ name, id, createdDate, dismissReminder }) => (
  <div className="notification-item-wrapper">
    <div className="notification-item-label">
      <span className="notification-item-label-date">
        {format(createdDate, 'DD-MMM-YYYY')}
      </span>
      <span className="notification-item-label-name">
        {name}
      </span>
    </div>
    <div className="notification-item-controls">
      <button
        className="hide-notification-btn"
        onClick={() => dismissReminder(id)} >Dismiss</button>
    </div>
  </div>
);

notification.propTypes = {
  name: PropTypes.string.isRequired,
};

export default notification;