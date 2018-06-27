import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import Form from '../../../containers/myTasks/editTask';
import LayoutManager from './layoutManager';
import { List } from '../../imports';
import Filters from './filter';
import '../css/myTasks.css';


const myTasks = ({
  items, layoutType, layouts, onLayoutChange,
}) => {
  const filterWrapperClass = classNames(
    'mytasks-filter-wrapper',
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
    'mytasks-form-wrapper',
    'column', {
      'is-two-fifths-desktop': (layoutType === 'showall'),
      'is-half-desktop': (layoutType === 'withoutfilters'),
      'is-hidden': (layoutType === 'listonly'),
    },
  );
  return (
    <div className="container mytasks-container">
      <LayoutManager onLayoutChange={onLayoutChange} layouts={layouts} />
      <div className="columns is-multiline is-centered is-variable is-3">
        <div className={filterWrapperClass}>
          <Filters />
        </div>
        <div className={listWrapperClass}>
          <List items={items} />
        </div>
        <div className={formWrapperClass}><Form /></div>
      </div>
    </div>);
};

myTasks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  layoutType: PropTypes.string.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  layouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool,
  })).isRequired,
};

myTasks.defaultProps = {
  items: [],
};

export default myTasks;
