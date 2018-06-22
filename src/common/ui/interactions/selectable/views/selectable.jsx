import React from 'react';
import PropTypes from 'prop-types';
import '../css/selectable.css';

const selectable = ({ onChange, on, name }) => (
  <div className="selectable-wrapper">
    <label htmlFor={name} className="sel-label">
      <input type="checkbox" id={name} className="selectable-input" onChange={onChange} />
      {on ? <span className="selectable on" /> : <span className="selectable off" />}
    </label>
  </div>
);

selectable.propTypes = {
  onChange: PropTypes.func.isRequired,
  on: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

selectable.defaultProps = {
  on: false,
};

export default selectable;
