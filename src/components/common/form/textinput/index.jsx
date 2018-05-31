import React from 'react';
import PropType from 'prop-types';
import './textinput.css';

const TextInput = props => (
  <div className="text-input-wrapper">
    <label className="text-input-label" htmlFor={`textarea-${props.name}`}>{props.label}
      <input
        type="text"
        className="text-input"
        value={props.value}
        name={props.id}
        id={`text-input-${props.name}`}
        onChange={(ev) => {
            props.onChange(ev);
            props.validate(ev.target.value);
          }
        }
      />
    </label>
  </div>
);

TextInput.propTypes = {
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  value: PropType.string,
  name: PropType.string.isRequired,
  validate: PropType.func.isRequired,
  id: PropType.string.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
