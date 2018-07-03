import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const dashboardStat = ({ label, count, type }) => (
  <div className={classNames('dashboard-stat', { [type]: type })}>
    <span className="dashboard-stat-count">
      {count}
      <span className="dashboard-stat-label">{label}</span>
    </span>
  </div>
);

dashboardStat.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default dashboardStat;
