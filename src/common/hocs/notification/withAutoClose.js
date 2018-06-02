import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function withAutoClose(WrappedComponent) {
  class NotificationWithAutoClose extends Component {
    componentDidMount() {
      setTimeout(() => {
        this.props.close();
      }, this.props.autoCloseTimeout);
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  }

  NotificationWithAutoClose.propTypes = {
    autoCloseTimeout: PropTypes.number.isRequired,
    close: PropTypes.func.isRequired,
  };

  return NotificationWithAutoClose;
}
