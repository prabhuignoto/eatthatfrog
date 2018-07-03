import React from 'react';
import PropTypes from 'prop-types';

const dashboardStat = ({ label, count }) => (
  <div className="dashboard-stat">
    <span className="dashboard-stat-label">{label}</span>
    <span className="dashboard-stat-count">{count}</span>
  </div>
);

dashboardStat.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default dashboardStat;
