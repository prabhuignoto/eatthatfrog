import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uniqid';
import './textarea.css';

const id = uuid('textarea-');

const TextArea = ({
  label, value, disabled, onChange, required,
}) => (
  <div className="textarea-wrapper">
    <label className="textarea-label" htmlFor={id}>{label}
      <div className="textarea-label-wrapper">
        <textarea
          className="textarea"
          id={id}
          value={value}
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  value: '',
  disabled: false,
  required: false,
};

export default TextArea;
