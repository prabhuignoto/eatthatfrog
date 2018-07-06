import React from 'react';
import { string, func, bool } from 'prop-types';
import classNames from 'classnames';
import uuid from 'uniqid';
import './toggle-switch.css';

const getId = () => `toggle-switch-${uuid().replace('-', '')}`;

const ToggleSwitch = ({
  active, animationEnabled, label, onToggle,
}) => {
  const id = getId();
  const toggleSwitchClass = classNames('toggle-switch-container', {
    on: active,
    off: !active,
    'animation-enabled': animationEnabled,
  });
  return (
    <div className={toggleSwitchClass}>
      <label
        htmlFor={id}
        className="toggle-switch-label"
      >
        <span className="label-text">{label}</span>
        <div className="toggle-switch-input-wrapper">
          <input
            type="checkbox"
            className="toggle-switch-input"
            id={id}
            onChange={onToggle}
          />
        </div>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: string.isRequired,
  onToggle: func.isRequired,
  active: bool.isRequired,
  animationEnabled: bool,
};

ToggleSwitch.defaultProps = {
  animationEnabled: true,
};

export default ToggleSwitch;
