import React from 'react';
import '../css/noTasksView.css';

const noTasksView = () => (
  <div className="no-tasks-view">
    <div className="notasks-img-wrapper">
      <div className="notasks-img" role="img" />
      <div className="notasks-img fallen-cone" role="img" />
    </div>
    <div className="notasks-msg-wrapper">
      <span>
        {'You dont have any tasks.'}
      </span>
      <span>
        {'Create one using the Add button.'}
      </span>
    </div>
  </div>
);

export default noTasksView;
