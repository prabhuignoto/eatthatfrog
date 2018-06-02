import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../imports';
import './myfrogs.css';

class MyFrogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
    });
  }

  render() {
    return (
      <div className="my-frogs-wrapper">
        <div className="tasks-list-wrapper">
          <List items={this.state.items} />
        </div>
        <div className="task-detail-wrapper" />
      </div>
    );
  }
}

MyFrogs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  getAllTasks: PropTypes.func.isRequired,
};

MyFrogs.defaultProps = {
  items: [],
};

export default MyFrogs;
