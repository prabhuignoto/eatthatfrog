import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Filter from '../../../containers/myTasks/filters';
import SmartReminderBtn from '../../../containers/myTasks/smartReminderBtn';
import LayoutManager from './layoutManager';
import { SearchBox } from '../../imports';
import '../css/toolbar.css';

const Tools = ({
  showFilters, filtersVisible, showNotificationCenter, onFilterClosed,
}) => (
  <Fragment>
    <li className="toolbar-item apply-filters-container">
      <button className="toolbar-button apply-filters-btn" type="button" onClick={showFilters}>
        <i className="add-task-btn-ico apply-filters" />
        <span className="is-hidden-touch">
          {'Filter'}
        </span>
      </button>
      {filtersVisible
        ? (
          <div className="filters-wrapper">
            <Filter onFilterClosed={onFilterClosed} />
          </div>) : null
      }
    </li>
    <li className="toolbar-item smartreminder-btn-container">
      <SmartReminderBtn
        additionalText="You have reminders"
        icon="bell"
        onShowNotificationCenter={showNotificationCenter}
        name="Reminders"
      />
    </li>
  </Fragment>
);

Tools.propTypes = {
  showFilters: PropTypes.func.isRequired,
  onFilterClosed: PropTypes.func.isRequired,
  showNotificationCenter: PropTypes.func.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
};

const toolbar = ({
  onAddTask, onBack, onFilterClosed,
  showFilters, showBackButton, filtersVisible, tasksAvailable,
  showNotificationCenter, layouts, layoutType, onLayoutChange,
}) => (
  <Fragment>
    <div className="toolbar-wrapper">
      <ul className="toolbar">
        {!showBackButton
          ? (
            <Fragment>
              <li className={classNames('toolbar-item', 'add-task-container', {
                'no-tasks': !tasksAvailable,
              })}
              >
                <button className="toolbar-button add-task-btn" onClick={onAddTask} type="button">
                  <i className="add-task-btn-ico add-task" />
                  <span className="is-hidden-touch">
                    {'Add'}
                  </span>
                </button>
              </li>
              {tasksAvailable
                ? (
                  <Tools
                    showFilters={showFilters}
                    filtersVisible={filtersVisible}
                    showNotificationCenter={showNotificationCenter}
                    onFilterClosed={onFilterClosed}
                  />
                ) : null
              }
            </Fragment>
          )
          : (
            <li className="toolbar-item back-btn-wrapper">
              <button className="toolbar-button back-btn" onClick={onBack} type="button">
                <i className="back-btn-icon" />
                <span>
                  {'Back'}
                </span>
              </button>
            </li>)
        }
        <li className="toolbar-item tbar-layoutmanager-wrapper">
          {/* <LayoutManager
            layouts={layouts}
            layoutType={layoutType}
            onLayoutChange={onLayoutChange}
          /> */}
        </li>
        <li className="toolbar-item app-title-wrapper">
          <button className="toolbar-button settings" type="button">
            <i className="settings-btn-icon" />
          </button>
        </li>
      </ul>
    </div>
  </Fragment>
);

toolbar.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  showFilters: PropTypes.func.isRequired,
  onFilterClosed: PropTypes.func.isRequired,
  showNotificationCenter: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
  tasksAvailable: PropTypes.bool.isRequired,
};

export default toolbar;
