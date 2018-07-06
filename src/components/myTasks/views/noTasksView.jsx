import React from 'react';
import '../css/noTasksView.css';

const noTasksView = () => (
  <div className="no-tasks-view">
    <div className="notasks-img-wrapper">
      <div className="notasks-img" role="img" />
    </div>
    <div className="notasks-msg-wrapper">
      <span>
        {'Hey there, Welcome to Todoeur '}
      </span>
      <span className="notasks-msg-subtext">
        {/* {'You dont seem to have any tasks at the moment.'} */}
      </span>
    </div>
  </div>
);

export default noTasksView;
