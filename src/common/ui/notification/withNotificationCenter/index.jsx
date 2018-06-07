import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../withDialog';

export default (function withCenter(WrappedComponent) {
  class NotificationCenter extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <div className="notification-center">
          <div className="success-notification-container">
            {this.props.showSuccess ? <WrappedComponent
              type="success"
              title={this.props.success.title}
              message={this.props.success.message}
              autoCloseTimeout={this.props.autoCloseTimeout}
              close={this.props.onCloseSuccess}
            /> : null}
          </div>
          <div className="failed-notification-container">
            {this.props.showError ? <WrappedComponent
              type="error"
              title={this.props.error.title}
              message={this.props.error.message}
              autoCloseTimeout={this.props.autoCloseTimeout}
              close={this.props.onCloseError}
            /> : null}
          </div>
        </div>
      );
    }
  }

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

  return NotificationCenter;
}(Notification));
