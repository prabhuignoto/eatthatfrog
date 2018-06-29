import React from 'react';
import withListAlert from './listAlert/hocs/withListAlert';
import ConfirmTaskPopdwn from './confirmTask';
import ConfirmDeletePopdwn from './confirmDelete';

const taskCompleteBtn = () => (
  <button className="mark-as-complete list-control-btn">
    <i className="list-control-icon" />
  </button>
);

const taskDeleteBtn = () => (
  <button className="list-control-delete list-control-btn">
    <i className="list-control-icon" />
  </button>
);

const taskCompleteAlertBtn = withListAlert(taskCompleteBtn)(ConfirmTaskPopdwn);
const taskDeleteAlertBtn = withListAlert(taskDeleteBtn)(ConfirmDeletePopdwn);

export { taskCompleteAlertBtn, taskDeleteAlertBtn };
