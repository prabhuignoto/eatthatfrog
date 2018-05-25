import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';

const TextArea = props => (
  <div className="textarea-wrapper">
    <label className="textarea-label" htmlFor={`text-input-${props.name}`}>{props.label}
      <textarea
        className="textarea"
        value={props.value}
        onChange={props.onChange}
        id={`text-input-${props.name}`}
      />
    </label>
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  value: '',
};

export default TextArea;
