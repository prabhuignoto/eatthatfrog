import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/toolbar.css';

const toolbar = ({ onAddTask, showFilters }) => (
  <Fragment>
    <div className="toolbar-wrapper">
      <ul className="toolbar">
        <li className="toolbar-item add-task-container">
          <button className="toolbar-button add-task-btn" onClick={onAddTask} />
          <span style={{ paddingRight: '10px' }}>Add Task</span>
        </li>
        <li className="toolbar-item apply-filters-container">
          <button className="toolbar-button apply-filters-btn" onClick={showFilters} />
        </li>
      </ul>
    </div>
  </Fragment>
);

toolbar.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  showFilters: PropTypes.func.isRequired,
};

export default toolbar;
