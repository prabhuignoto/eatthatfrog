import React, { Fragment } from 'react';
import DashboardItem from './dashboardItem';
import './main.css';
import Popup from '../../common/ui/popup/hocs/withEsc';

const Dashboard = () => (
  <Fragment>
    <Popup title="this is a test"> This is another big test for the popup</Popup>
    <div className="dashboard-container">
      <DashboardItem
        name="add-task"
        label="Add a Task"
        path="/add"
      />
      <DashboardItem
        name="my-tasks"
        label="My Tasks"
        path="/myFrogs"
      />
      <DashboardItem
        name="completed-tasks"
        label="Completed"
        path="/completed"
      />
      <DashboardItem
        name="missed-tasks"
        label="Missed Tasks"
        path="/missed"
      />
      <DashboardItem
        name="settings"
        label="Settings"
        path="/settings"
      />
      <DashboardItem
        name="help"
        label="Help"
        path="/help"
      />
    </div>
  </Fragment>
);

export default Dashboard;
