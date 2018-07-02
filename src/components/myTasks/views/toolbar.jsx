import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Filter from '../views/../../../containers/myTasks/filters';
import '../css/toolbar.css';

const toolbar = ({
  onAddTask, showFilters, showBackButton, onBack, filtersVisible, onFilterClosed,
}) => (
  <Fragment>
    <div className="toolbar-wrapper">
      <ul className="toolbar">
        {!showBackButton ?
          <Fragment>
            <li className="toolbar-item add-task-container">
              <button className="toolbar-button add-task-btn" onClick={onAddTask}>
                <i className="add-task-btn-ico add-task" />
                <span>Add</span>
              </button>
            </li>
            <li className="toolbar-item apply-filters-container">
              <button className="toolbar-button apply-filters-btn" onClick={showFilters}>
                <i className="add-task-btn-ico apply-filters" />
                <span>Filter</span>
              </button>
              {filtersVisible ?
                <div className="filters-wrapper">
                  <Filter onFilterClosed={onFilterClosed} />
                </div> : null
              }
            </li>
          </Fragment>
          :
          <li className="toolbar-item">
            <button className="toolbar-button back-btn" onClick={onBack} >
              <i className="back-btn-icon" />
              <span>Back</span>
            </button>
          </li>
        }
      </ul>
    </div>
  </Fragment>
);

toolbar.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  showFilters: PropTypes.func.isRequired,
  onFilterClosed: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
};

export default toolbar;
