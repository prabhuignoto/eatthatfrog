import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid-random';
import 'bulma/css/bulma.css';
import Form from '../../../containers/myTasks/editTask';
import LayoutManager from './layoutManager';
import { List } from '../../imports';
import Filters from '../../../containers/myTasks/filters';
import Toolbar from './toolbar';
import '../css/myTasks.css';

const myTasks = ({
  items, layoutType, layouts, onLayoutChange, onListItemSelected,
  name, description, reminderEnabled, taskTags, showFilters, filtersVisible, onFilterClosed,
}) => {
  const filterWrapperClass = classNames(
    'mytasks-filter-wrapper',
    // 'column',
    'column', {
      // 'is-hidden': (layoutType === 'withoutfilters'),
    },
  );
  const listWrapperClass = classNames(
    'list-wrapper',
    'column', {
      'is-two-fifths-desktop': (layoutType === 'showall'),
      'is-half-desktop': (layoutType === 'withoutfilters'),
      // 'is-four-fifths': (layoutType === 'listonly'),
    },
  );
  const formWrapperClass = classNames(
    'mytasks-form-wrapper',
    'column', {
      'is-two-fifths-desktop': (layoutType === 'showall'),
      'is-half-desktop': (layoutType === 'withoutfilters'),
      // 'is-hidden': (layoutType === 'listonly'),
    },
  );
  return (
    <div className="container mytasks-container">
      <div className="tasks-header">
        <Toolbar showFilters={showFilters} />
        <div style={{ marginLeft: 'auto' }}>
          <LayoutManager onLayoutChange={onLayoutChange} layouts={layouts} />
        </div>
      </div>
      <div className="columns is-multiline is-centered is-variable is-3">
        <div className={listWrapperClass}>
          <List items={items} onSelect={onListItemSelected} />
        </div>
        <div className={formWrapperClass}>
          <Form
            name={name}
            description={description}
            reminderEnabled={reminderEnabled}
            taskTags={taskTags}
            key={uuid()}
          />
        </div>
      </div>

      <Fragment>
        <div className={filterWrapperClass}>
          {filtersVisible ? <Filters onFilterClosed={onFilterClosed} /> : null }
        </div>
      </Fragment>
    </div>);
};

myTasks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  layoutType: PropTypes.string.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  onListItemSelected: PropTypes.func.isRequired,
  layouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool,
  })).isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  reminderEnabled: PropTypes.bool,
  taskTags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  showFilters: PropTypes.func.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
};

myTasks.defaultProps = {
  items: [],
  name: '',
  description: '',
  reminderEnabled: false,
};

export default myTasks;
