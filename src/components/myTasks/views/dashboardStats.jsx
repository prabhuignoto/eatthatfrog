import React from 'react';
import DashboardStat from './dashboardStat';
import '../css/dashboardStat.css';

const dashboardStats = () => (
  <div className="dashboard-stats-wrapper">
    <DashboardStat count={12} label="open tasks" />
    <DashboardStat count={22} label="completed tasks" />
    {/* <DashboardStat count={42} /> */}
  </div>
);

export default dashboardStats;
