import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import { List } from '../../imports';
import Form from '../form/hocs/withEdit';
import Filters from '../filter';
import './myfrogs.css';

class MyFrogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      filtersVisible: true,
    };
    this.hideFilters = this.hideFilters.bind(this);
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
    });
  }

  hideFilters() {
    this.setState({
      filtersVisible: false,
    });
  }

  render() {
    const filterWrapperClass = classNames(
      'my-frogs-filter-wrapper',
      'column',
      'is-one-fifth-desktop', {
        'is-hidden': !this.state.filtersVisible,
      },
    );
    const listWrapperClass = classNames(
      'list-wrapper',
      'column', {
        'is-two-fifths-desktop': this.state.filtersVisible,
        'is-half-desktop': !this.state.filtersVisible,
      },
    );
    const formWrapperClass = classNames(
      'form-wrapper',
      'column', {
        'is-two-fifths-desktop': this.state.filtersVisible,
        'is-half-desktop': !this.state.filtersVisible,
      },
    );

    return (
      <div className="container myfrogs-container">
        <div className="columns is-multiline is-centered is-variable is-3">
          <div className={filterWrapperClass}>
            {/* <button className="close-filters" onClick={this.hideFilters}>
              <i className="close-filters-icon" />
            </button> */}
            <Filters />
          </div>
          <div className={listWrapperClass}>
            <List items={this.state.items} />
          </div>
          <div className={formWrapperClass}><Form /></div>
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
