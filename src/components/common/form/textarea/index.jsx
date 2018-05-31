import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';

const TextArea = props => (
  <div className="textarea-wrapper">
    <label className="textarea-label" htmlFor={`text-input-${props.name}`}>{props.label}
      <textarea
        className="textarea"
        name={props.id}
        id={`text-input-${props.name}`}
        value={props.value}
        onChange={(ev) => {
            props.onChange(ev);
            props.validate(ev.target.value);
          }
        }
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
  validate: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  value: '',
};

export default TextArea;
