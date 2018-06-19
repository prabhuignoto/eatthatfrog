import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import { List } from '../../imports';
import Form from '../form/hocs/withEdit';
import Filters from '../filter';
import LayoutManager from './layoutmanager/layoutManagerDefault';
import './myfrogs.css';

class MyFrogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      layoutType: 'showall',
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
    });
  }

  changeLayout(type) {
    this.setState({
      layoutType: type,
    });
  }

  render() {
    const { layoutType } = this.state;

    const filterWrapperClass = classNames(
      'my-frogs-filter-wrapper',
      'column',
      'is-one-fifth-desktop', {
        'is-hidden': (layoutType === 'withoutfilters' || layoutType === 'listonly'),
      },
    );
    const listWrapperClass = classNames(
      'list-wrapper',
      'column', {
        'is-two-fifths-desktop': (layoutType === 'showall'),
        'is-half-desktop': (layoutType === 'withoutfilters'),
        'is-four-fifths': (layoutType === 'listonly'),
      },
    );
    const formWrapperClass = classNames(
      'form-wrapper',
      'column', {
        'is-two-fifths-desktop': (layoutType === 'showall'),
        'is-half-desktop': (layoutType === 'withoutfilters'),
        'is-hidden': (layoutType === 'listonly'),
      },
    );

    return (
      <Fragment>
        <div className="container myfrogs-container">
          <LayoutManager changeLayout={this.changeLayout} />
          <div className="columns is-multiline is-centered is-variable is-3">
            <div className={filterWrapperClass}>
              <Filters />
            </div>
            <div className={listWrapperClass}>
              <List items={this.state.items} />
            </div>
            <div className={formWrapperClass}><Form /></div>
          </div>
        </div>
      </Fragment>
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
