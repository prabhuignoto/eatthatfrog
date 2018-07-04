import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import uuid from 'uniqid';
import 'bulma/css/bulma.css';
import Form from '../../../containers/myTasks/editTask';
import AddForm from '../../../containers/addTask/addTask';
import { List } from '../../imports';
import Toolbar from './toolbar';
import NoTasksView from './noTasksView';
import DashboardStats from '../../../containers/myTasks/dashboardStats';
import '../css/myTasks.css';


const myTasks = ({
  items, onListItemSelected,
  name, description, reminderEnabled, taskTags,
  showFilters, filtersVisible, onFilterClosed,
  createMode, onAddTask, onBack, onSaved, tasksAvailable,
}) => {
  const listWrapperClass = classNames(
    'list-wrapper',
    'column',
    'is-two-fifth-desktop',
  );
  const formWrapperClass = classNames(
    'mytasks-form-wrapper',
    'column',
    'is-two-fifth-desktop',
  );
  return (
    <div className="container mytasks-container">
      <div className="tasks-header">
        <Toolbar
          showFilters={showFilters}
          onAddTask={onAddTask}
          showBackButton={createMode}
          onBack={onBack}
          filtersVisible={filtersVisible}
          onFilterClosed={onFilterClosed}
          tasksAvailable={tasksAvailable}
        />
      </div>
      {tasksAvailable ?
        <div className={classNames(
      'columns is-multiline is-centered is-variable is-8',
      { 'create-mode': createMode, 'default-mode': !createMode },
      )}
        >
          <Fragment>
            <div className={classNames('column is-2')}>
              <DashboardStats />
            </div>
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
          </Fragment>
        </div> : <NoTasksView /> }
      <CSSTransitionGroup
        transitionName="add-form-transition"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
        {createMode ?
          <div className="add-form-wrapper">
            <AddForm onSaved={onSaved} />
          </div> : null}
      </CSSTransitionGroup>
    </div>);
};

myTasks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  onListItemSelected: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onSaved: PropTypes.func.isRequired,
  onFilterClosed: PropTypes.func.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  reminderEnabled: PropTypes.bool,
  createMode: PropTypes.bool.isRequired,
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

