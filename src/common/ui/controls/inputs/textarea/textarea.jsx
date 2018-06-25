import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';

const TextArea = ({
  name, label, id, textInputValue, disabled, onChange, required,
}) => (
  <div className="textarea-wrapper">
    <label className="textarea-label" htmlFor={`text-input-${name}`}>{label}
      <div className="textarea-label-wrapper">
        <textarea
          className="textarea"
          name={id}
          id={`text-input-${name}`}
          value={textInputValue}
          disabled={disabled}
          onChange={onChange}
        />
        {required ? <span className="textarea-required-ico" /> : null}
      </div>
    </label>
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textInputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  textInputValue: '',
  disabled: false,
  required: false,
};

export default TextArea;
