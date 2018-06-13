import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import { List } from '../../imports';
import Form from '../form/hocs/withEdit';
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
      <div className="container myfrogs-container">
        <div className="columns is-multiline is-centered is-variable is-5">
          <div className="column is-one-quarter-desktop">
          </div>
          <div className="column is-one-third-desktop">
            <List items={this.state.items} />
          </div>
          <div className="column is-one-third-desktop"><Form /></div>
        </div>
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
