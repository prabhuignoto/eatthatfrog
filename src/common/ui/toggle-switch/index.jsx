import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './toggle-switch.css';

const getId = name => `toggle-switch-${name}`;

const ToggleSwitch = (props) => {
  const id = getId(props.name);
  const toggleSwitchClass = classNames('toggle-switch-container', {
    on: props.active,
    off: props.inActive,
  });
  return (
    <div className={toggleSwitchClass}>
      <label
        htmlFor={id}
        className="toggle-switch-label"
      >
        <span className="label-text">{props.label}</span>
        <div className="toggle-switch-input-wrapper">
          <input
            type="checkbox"
            className="toggle-switch-input"
            id={id}
            onChange={props.onToggle}
          />
        </div>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  inActive: PropTypes.bool.isRequired,
};

export default ToggleSwitch;
