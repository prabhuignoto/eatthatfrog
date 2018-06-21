import React from 'react';
import PropType from 'prop-types';
import './textinput.css';

const TextInput = ({
  name, label, isReadOnly, value, onChange,
}) => (
  <div className="text-input-wrapper">
    <label className="text-input-label" htmlFor={`textarea-${name}`}>{label}
      <input
        type="text"
        className="text-input"
        value={value}
        name={name}
        id={`text-input-${name}`}
        disabled={isReadOnly}
        onChange={onChange}
      />
    </label>
  </div>
);

TextInput.propTypes = {
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  value: PropType.string,
  name: PropType.string.isRequired,
  isReadOnly: PropType.bool,
};

TextInput.defaultProps = {
  value: '',
  isReadOnly: false,
};

export default TextInput;
