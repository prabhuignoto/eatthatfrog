import React from 'react';
import { string, func, bool } from 'prop-types';
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
    key={id}
  >
    <i className={status} />
    <button
      onClick={() => onSelect(id)}
      onKeyPress={onSelect}
      type="button"
    >
      {name}
    </button>
  </div>
);

ListItem.propTypes = {
  name: string.isRequired,
  onSelect: func.isRequired,
  id: string.isRequired,
  selected: bool,
  status: string.isRequired,
};

ListItem.defaultProps = {
  selected: false,
};

export default ListItem;
