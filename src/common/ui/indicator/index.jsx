import React from 'react';
import PropTypes from 'prop-types';

const itemIndicator = ({ on, off }) => (
  <div className="indicator-wrapper">
    {on ? <span className="indicator on" /> : null}
    {off ? <span className="indicator off" /> : null}
  </div>
);

itemIndicator.propTypes = {
  on: PropTypes.bool,
  off: PropTypes.bool,
};

itemIndicator.defaultProps = {
  on: false,
  off: true,
};

export default itemIndicator;
