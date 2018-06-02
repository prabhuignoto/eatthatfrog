import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = props => {
    let className= classNames('product-logo', props.size);
    return (
        <Fragment>
            <Link to="/dashboard" >
                <div className={className}>
                    <div className="img"></div>
                    <div className="bg"></div>
                </div>
            </Link>
        </Fragment>
    );
}

Logo.propTypes= {
    size: PropTypes.string.isRequired,
}

Logo.defaultProps= {
    size: 's',
}

export default Logo;