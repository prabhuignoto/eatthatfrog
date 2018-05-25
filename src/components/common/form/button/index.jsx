import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => (
  <div className="button-wrapper">
    <button className="button" onClick={props.onClick}>{props.label}</button>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
