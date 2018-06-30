import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './toggle-switch.css';

const getId = name => `toggle-switch-${name}`;

const ToggleSwitch = ({
  active, animationEnabled, label, onToggle, name,
}) => {
  const id = getId(name);
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  animationEnabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  animationEnabled: true,
};

export default ToggleSwitch;
