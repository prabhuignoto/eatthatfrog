import React from 'react';
import { string, func } from 'prop-types';
import '../css/tag.css';

const Tag = ({ name, id, remove }) => (
  <div className="tag-wrapper" id={id}>
    <span className="tag-label">
      {name}
    </span>
    <button
      className="tag-remove"
      onClick={() => remove(id)}
      type="button"
    />
  </div>
);

Tag.propTypes = {
  name: string.isRequired,
  remove: func.isRequired,
  id: string.isRequired,
};

Tag.defaultProps = {
};

export default Tag;
