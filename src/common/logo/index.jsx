import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = (props) => {
  const className = classNames('product-logo', props.size);
  return (
    <Fragment>
      <Link to="/dashboard" href="/dashboard">
        <div className={className}>
          <div className="img" />
          <div className="bg" />
        </div>
      </Link>
    </Fragment>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 's',
};

export default Logo;
