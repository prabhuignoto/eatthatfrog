import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItem = ({
  id, onSelect, name, selected, status,
}) => (
  <div
    className={classNames('ui-list-item', {
      selected,
    })}
    name={`list-item-${id}`}
    role="listitem"
  >
    <i className={status} />
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
  selected: PropTypes.bool,
  status: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  selected: false,
};

export default ListItem;
