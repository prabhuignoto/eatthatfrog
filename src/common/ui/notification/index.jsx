import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './notifications.css';

const Notification = (props) => {
  const notsClassName = classNames('nots-container', {
    [props.type]: true,
  });
  const notsHdrIcon = classNames('nots-hdr-icon', {
    [props.type]: true,
  });
  return (
    <div className={notsClassName}>
      <div className="nots-wrapper">
        <header className="nots-hdr">
          <i className={notsHdrIcon} />
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
    </div>);
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Notification;
