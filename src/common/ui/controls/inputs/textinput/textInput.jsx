import React from 'react';
import PropType from 'prop-types';
import './textinput.css';

const TextInput = ({
  name, label, disabled, value, onChange, required,
}) => (
  <div className="text-input-wrapper">
    <label className="text-input-label" htmlFor={`textarea-${name}`}>{label}
      <div className="text-input-label-wrapper">
        <input
          type="text"
          className="text-input"
          value={value}
          name={name}
          id={`text-input-${name}`}
          disabled={disabled}
          onChange={onChange}
        />
        {required ? <span className="text-input-required-ico" /> : null}
      </div>
    </label>
  </div>
);

TextInput.propTypes = {
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  value: PropType.string,
  name: PropType.string.isRequired,
  disabled: PropType.bool,
  required: PropType.bool,
};

TextInput.defaultProps = {
  value: '',
  disabled: false,
  required: false,
};

export default TextInput;
