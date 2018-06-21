import React from 'react';
import PropTypes from 'prop-types';
import Notification from './notificationAutoClose';

const NotificationCenter = props => (
  <div className="notification-center">
    <div className="success-notification-container">
      {props.showSuccess ? <Notification
        type="success"
        title={props.success.title}
        message={props.success.message}
        autoCloseTimeout={props.autoCloseTimeout}
        close={props.onCloseSuccess}
      /> : null}
    </div>
    <div className="failed-notification-container">
      {props.showError ? <Notification
        type="error"
        title={props.error.title}
        message={props.error.message}
        autoCloseTimeout={props.autoCloseTimeout}
        close={props.onCloseError}
      /> : null}
    </div>
  </div>
);

NotificationCenter.propTypes = {
  success: PropTypes.shape({
    message: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  autoCloseTimeout: PropTypes.number,
  onCloseSuccess: PropTypes.func.isRequired,
  onCloseError: PropTypes.func.isRequired,
  showSuccess: PropTypes.bool.isRequired,
  showError: PropTypes.bool.isRequired,
};

NotificationCenter.defaultProps = {
  autoCloseTimeout: 2500,
};

export default NotificationCenter;
