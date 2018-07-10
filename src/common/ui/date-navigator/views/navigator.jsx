import React from 'react';
import PropTypes from 'prop-types';
import '../css/navigator.css';

const navigator = ({ dateValue, onNavigateBack, onNavigateForward }) => {
  return (
    <div className="navigator-wrapper">
      <div className="nav-btn-wrapper">
        <button className="navigate-back nav-btn" onClick={onNavigateBack} />
      </div>
      <div className="date-label">{dateValue}</div>
      <div className="nav-btn-wrapper">
        <button className="navigate-forward nav-btn" onClick={onNavigateForward} />
      </div>
    </div>
  );
};

navigator.propTypes = {
  dateValue: PropTypes.string.isRequired,
  onNavigateForward: PropTypes.func.isRequired,
  onNavigateBack: PropTypes.func.isRequired,
};

export default navigator;
