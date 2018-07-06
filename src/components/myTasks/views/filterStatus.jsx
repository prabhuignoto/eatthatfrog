import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/filterStatus.css';

const filterStatus = ({ message, hide }) => (
  <div className={classNames('filter-status-wrapper', {
    hide,
  })}
  >
    {message}
  </div>
);

filterStatus.propTypes = {
  message: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default filterStatus;
