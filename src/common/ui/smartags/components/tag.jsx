import React from 'react';
import PropTypes from 'prop-types';
import './tag.css';

const Fox = props => (
  <div className="fox-wrapper" id={props.id}>
    <span className="fox-label">
      {props.name}
    </span>
    {!props.isReadOnly ? <button
      className="fox-remove"
      onClick={() => props.remove(props.id)}
    /> : null}
  </div>
);

Fox.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
};

Fox.defaultProps = {
  isReadOnly: false,
};

export default Fox;
