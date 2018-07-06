import React from 'react';
import withListAlert from './listAlert/hocs/withListAlert';
import ConfirmTaskPopdwn from './confirmTask';
import ConfirmDeletePopdwn from './confirmDelete';
import ConfirmRestorePopdwn from './confirmRestore';

const taskCompleteBtn = () => (
  <button className="mark-as-complete list-control-btn" type="button">
    <i className="list-control-icon" />
  </button>
);

const taskDeleteBtn = () => (
  <button className="list-control-delete list-control-btn" type="button">
    <i className="list-control-icon" />
  </button>
);

const taskRestoreBtn = () => (
  <button className="list-control-restore list-control-btn" type="button">
    <i className="list-control-icon" />
  </button>
);

const taskCompleteAlertBtn = withListAlert(taskCompleteBtn)(ConfirmTaskPopdwn);
const taskDeleteAlertBtn = withListAlert(taskDeleteBtn)(ConfirmDeletePopdwn);
const taskRestoreAlertBtn = withListAlert(taskRestoreBtn)(ConfirmRestorePopdwn);

export { taskCompleteAlertBtn, taskRestoreAlertBtn, taskDeleteAlertBtn };
