import React from 'react';
import {
  func, string, shape, arrayOf,
} from 'prop-types';
import ListItem from '../hocs/listWithControls';
import '../css/list.css';

// function to dynamically render list item type
const List = ({ items, onSelect }) => (
  <div className="ui-list-wrapper">
    <div className="ui-list" role="list">
      {items.map(item => <ListItem {...item} key={item.id} onSelect={onSelect} />)}
    </div>
  </div>
);

// prop types
List.propTypes = {
  items: arrayOf(shape({
    name: string,
    description: string,
    id: string.isRequired,
  })),
  onSelect: func.isRequired,
};

// default props
List.defaultProps = {
  items: [],
};

export default List;
