import React from 'react';
import PropTypes from 'prop-types';
import './notifications.css';

const Notification = props => (
  <div className="nots-container">
    <div className="nots-wrapper">
      <header className="nots-hdr">
        <span className="nots-hdr-title">
          {props.title}
        </span>
        <button className="nots-close-btn" onClick={props.close}>
          <i className="nots-close-ico" />
        </button>
      </header>
      <div className="nots-message">
        {props.message}
      </div>
    </div>
  </div>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default Notification;
