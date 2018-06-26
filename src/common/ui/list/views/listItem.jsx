import React from 'react';
import PropTypes from 'prop-types';
import '../css/listItem.css';

const ListItem = ({ id, onSelect, name }) => (
  <div
    className="ui-list-item"
    name={`list-item-${id}`}
    role="listitem"
  >
    <button
      onClick={() => onSelect(id)}
      onKeyPress={onSelect}
    >
      {name}
    </button>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
