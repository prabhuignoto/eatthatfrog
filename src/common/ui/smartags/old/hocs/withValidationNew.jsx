import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Smartags from '../index';

const withValidationNew = ({ validate, error }) => {
  const validationResult = (
    <span className="error-info-listfox">
      {error.message}
    </span>
  );
  const wrapperClass = classNames('listfox-with-validation-wrapper', {
    error: this.state.error.message,
  });
  return (
    <Fragment>
      <div className={wrapperClass}>
        <Smartags
          // {...this.props}
          // ref={this.ref}
          onListFoxChanged={validate}
        />
      </div>
      {error.message ? validationResult : null}
    </Fragment>
  );
};

withValidationNew.propTypes = {
  validate: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
}

export default withValidationNew;
