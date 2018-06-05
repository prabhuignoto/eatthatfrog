import React from 'react';
import PropTypes from 'prop-types';
import './fox.css';

const Fox = props => (
  <div className="fox-wrapper" id={props.id}>
    <span className="fox-label">
      {props.name}
    </span>
    <button
      className="fox-remove"
      onClick={() => props.remove(props.id)}
    />
  </div>
);

Fox.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Fox;
