import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../hocs/listWithControls';
import '../css/list.css';

// function to dynamically render list item type
const List = ({ items }) => (
  <div className="ui-list-wrapper">
    <div className="ui-list" role="list">
      {items.map(item => <ListItem {...item} key={item.id} />)}
    </div>
  </div>
);

// prop types
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
  })),
};

// default props
List.defaultProps = {
  items: [],
};

export default List;

