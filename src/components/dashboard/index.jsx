import React, { Fragment } from 'react';
import DashboardItem from './dashboardItem';
import DropdownFox from '../../common/ui/dropdown-fox';
import './main.css';

const Dashboard = () => (
  <Fragment>
    <DropdownFox foxes={[{ name: 'pr' }, { name: 'ramya' },{ name: 'prabhu murthy' }, { name: 'ramya' },{ name: 'prabhu' }, { name: 'ramya muralidharan' }]} />
    {/* <div className="dashboard-container">
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
    </div> */}
  </Fragment>
);

export default Dashboard;
