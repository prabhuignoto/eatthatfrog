import React from 'react';
import PropTypes from 'prop-types';
import './notifications.css';

const Notification = ({
  title, close, message, notsClass, notsHdrIcon,
}) => (
  <div className={notsClass}>
    <div className="nots-wrapper">
      <header className="nots-hdr">
        <i className={notsHdrIcon} />
        <span className="nots-hdr-title">
          {title}
        </span>
        <button className="nots-close-btn" onClick={close}>
          <i className="nots-close-ico" />
        </button>
      </header>
      <div className="nots-message">
        {message}
      </div>
    </div>
  </div>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  notsClass: PropTypes.string.isRequired,
  notsHdrIcon: PropTypes.string.isRequired,
};

export default Notification;
