import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ListItem from './listItem';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCount: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      listCount: _.size(nextProps.items),
    });
  }

  render() {
    return (
      <div className="ui-list-wrapper">
        <ul className="ui-list">
          {this.props.items.map(item => <ListItem {...item} key={item.id} />)}
        </ul>
        <div className="pager">
          <span className="total-records">{this.state.listCount}</span>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
  })),
};

List.defaultProps = {
  items: [],
};

export default List;