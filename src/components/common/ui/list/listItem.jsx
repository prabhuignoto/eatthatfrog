import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <li
    className="ui-list-item"
  >
    <div className="ui-list-item-wrapper">
      <button
        onClick={props.onSelect}
        onKeyPress={props.onSelect}
      >
        {props.name}
      </button>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ListItem;