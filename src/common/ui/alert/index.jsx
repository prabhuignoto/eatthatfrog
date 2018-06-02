import React from 'react';
import PropTypes from 'prop-types';

const Alerts = props => (
  <div className="alert-wrapper">
    {props.message}
    <div className="additional-steps">
      {props.children}
    </div>
  </div>
);

Alerts.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

Alerts.defaultProps = {
  children: [],
};

export default Alerts;
