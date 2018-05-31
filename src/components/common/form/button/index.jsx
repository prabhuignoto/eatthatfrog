import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const Button = (props) => {
  const buttonClass = classNames('button-wrapper', {
    disabled: props.disable,
  });
  return (
    <div className={buttonClass}>
      <button className="button" onClick={props.onClick}>{props.label}</button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

export default Button;
