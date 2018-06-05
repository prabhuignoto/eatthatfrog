import React, { Fragment } from 'react';
import DashboardItem from './dashboardItem';
import ListFox from '../../common/ui/list-fox';
import './main.css';

const Dashboard = () => (
  <Fragment>
    {/* <ListFox label="cool fox" foxes={[]} /> */}
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
