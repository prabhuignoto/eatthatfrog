import React from 'react';
import PropTypes from 'prop-types';
import '../css/tag.css';

const Tag = ({ name, id, remove }) => (
  <div className="tag-wrapper" id={id}>
    <span className="tag-label">
      {name}
    </span>
    <button
      className="tag-remove"
      onClick={() => remove(id)}
    />
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Tag.defaultProps = {
};

export default Tag;
