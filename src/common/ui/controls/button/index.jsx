import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({
  onClick, label, buttonClass,
}) => (
  <div className={buttonClass}>
    <button className="button" onClick={onClick}>{label}</button>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
