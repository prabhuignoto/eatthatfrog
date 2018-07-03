import React from 'react';
import PropTypes from 'prop-types';
import DashboardStat from './dashboardStat';
import '../css/dashboardStat.css';

const dashboardStats = ({ openCount, completedCount, remindersCount }) => (
  <div className="dashboard-stats-wrapper">
    <DashboardStat count={openCount} label="Open" type="open" />
    <DashboardStat count={completedCount} label="Complete" type="complete" />
    <DashboardStat count={remindersCount} label="Reminders" type="reminder" />
    {/* <DashboardStat count={42} /> */}
  </div>
);

dashboardStats.propTypes = {
  openCount: PropTypes.number.isRequired,
  remindersCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
};

export default dashboardStats;
