import React from 'react';
import PropTypes from 'prop-types';
import '../css/tag.css';

const Tag = props => (
  <div className="tag-wrapper" id={props.id}>
    <span className="tag-label">
      {props.name}
    </span>
    {!props.isReadOnly ? <button
      className="tag-remove"
      onClick={() => props.remove(props.id)}
    /> : null}
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
};

Tag.defaultProps = {
  isReadOnly: false,
};

export default Tag;
