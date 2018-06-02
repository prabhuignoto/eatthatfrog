import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../imports';
import './addtasksuccess.css';

const AddTaskSuccess = () => (
  <div className="add-task-succ-alert">
    <div className="alert-message">
      <i className="alert-msg-icon" />
      Task Successfully added.
    </div>
    <div className="alert-wrapper">
      <Alert>
        <Link to="/dashboard" href="/dashboard">Goto Dashboard</Link>
        <Link to="/add" href="/add">Add another Task</Link>
      </Alert>
    </div>
  </div>
);

export default AddTaskSuccess;
