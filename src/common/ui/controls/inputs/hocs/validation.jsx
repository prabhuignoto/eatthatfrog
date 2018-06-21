import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import '../../../../hocs/form/withValidation/withValidation.css';

export default function (TextComponent) {
  const defaultWithValidation = (props) => {
    const className = classNames('with-validation', {
      error: !props.validation.success,
    });
    return (
      <div className={className}>
        <TextComponent {...props} />
        <ReactCSSTransitionGroup
          transitionName="err-message"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {props.validation.error.reason !== '' ?
            <i className="error-info">{props.validation.error.reason}
            </i> : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  };

  defaultWithValidation.propTypes = {
    validation: PropTypes.shape({
      success: PropTypes.bool.isRequired,
      error: PropTypes.shape({
        reason: PropTypes.string.isRequired,
      }),
    }),
    validate: PropTypes.func,
  };

  defaultWithValidation.defaultProps = {
    validate: () => { },
    validation: {},
  };

  return defaultWithValidation;
}
