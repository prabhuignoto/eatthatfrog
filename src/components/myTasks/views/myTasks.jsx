import React, { Fragment } from 'react';
import {
  arrayOf, string, bool, shape, func,
} from 'prop-types';
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
import NotificationCenter from '../../../containers/myTasks/notificationCenter';
import FilterStatus from '../../../containers/myTasks/filterStatus';


const myTasks = ({
  items, onListItemSelected,
  name, description, reminderEnabled, taskTags,
  showFilters, filtersVisible, onFilterClosed,
  createMode, onAddTask, onBack, onSaved, tasksAvailable,
  notificationCenterVisible, showNotificationCenter, closeNotificationCenter,
  layouts, layoutType, onLayoutChange,
}) => {
  const listWrapperClass = classNames(
    'list-wrapper',
    'column',
    'is-two-fifths-desktop',
  );
  const formWrapperClass = classNames(
    'mytasks-form-wrapper',
    'column',
    'is-two-fifths-desktop',
  );
  return (
    <Fragment>
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
            showNotificationCenter={showNotificationCenter}
            layouts={layouts}
            layoutType={layoutType}
            onLayoutChange={onLayoutChange}
          />
        </div>
        {tasksAvailable
          ? (
            <div className={classNames('columns main-container is-multiline is-centered is-variable is-5', {
              'create-mode': createMode,
              'default-mode': (!createMode && !notificationCenterVisible),
              'notification-center-open': notificationCenterVisible,
            })}
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
            </div>
          ) : <NoTasksView /> }

        {/* Add Task form */}
        <CSSTransitionGroup
          transitionName="mytasks-transition"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          {createMode
            ? (
              <div className="add-form-wrapper">
                <AddForm onSaved={onSaved} />
              </div>
            ) : null}
        </CSSTransitionGroup>
        {/* Add Task form */}

        {/* Notification center */}
        <CSSTransitionGroup
          transitionName="mytasks-transition"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          {notificationCenterVisible
            ? (
              <div className="notification-center-container">
                <NotificationCenter onClose={closeNotificationCenter} />
              </div>
            ) : null }
        </CSSTransitionGroup>
        <FilterStatus key={uuid()} hide={(createMode || !tasksAvailable)} />
      </div>
    </Fragment>);
};

myTasks.propTypes = {
  items: arrayOf(shape({
    name: string.isRequired,
    description: string.isRequired,
  })),
  onListItemSelected: func.isRequired,

  name: string,
  description: string,
  reminderEnabled: bool,
  taskTags: arrayOf(shape({
    name: string,
    id: string,
  })).isRequired,

  notificationCenterVisible: bool.isRequired,
  showNotificationCenter: bool.isRequired,
  closeNotificationCenter: bool.isRequired,

  onFilterClosed: func.isRequired,
  showFilters: func.isRequired,

  filtersVisible: bool.isRequired,
  tasksAvailable: bool.isRequired,

  onAddTask: func.isRequired,
  onBack: func.isRequired,
  onSaved: func.isRequired,
  createMode: bool.isRequired,
};

myTasks.defaultProps = {
  items: [],
  name: '',
  description: '',
  reminderEnabled: false,
};

export default myTasks;
