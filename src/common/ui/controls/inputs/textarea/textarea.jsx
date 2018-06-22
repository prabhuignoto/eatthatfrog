import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';

const TextArea = ({
  name, label, id, value, disabled, onChange,
}) => (
  <div className="textarea-wrapper">
    <label className="textarea-label" htmlFor={`text-input-${name}`}>{label}
      <textarea
        className="textarea"
        name={id}
        id={`text-input-${name}`}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </label>
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  value: '',
  disabled: false,
};

export default TextArea;
