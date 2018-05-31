import React, { Component } from 'react';
import UUID from 'uuid-random';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './withValidation.css';

export default function withValidation(WrappedComponent) {
  class Wrapper extends Component {
    // static method that checks for allowed characters
    static containsAllowedCharacters(value) {
      return /^[a-zA-Z0-9 ]*$/.test(value);
    }

    // static method that checks if the value is all numeric
    static isAllNumeric(value) {
      return /^[0-9]*$/.test(value);
    }

    constructor(props) {
      super(props);
      this.state = {
        validationFailed: null,
        id: UUID(),
      };
      this.validate = this.validate.bind(this);
      this.inputRef = React.createRef();
    }

    // react lifecycle method. the validation is initiated
    // from here
    componentWillReceiveProps(nextProps) {
      if ((this.props.validateInput !== nextProps.validateInput) &&
          nextProps.validateInput === true) {
        this.validate(nextProps.value);
      }
    }

    // method to validate the input value
    validate(value) {
      let success = true;
      let message = null;

      if (!value) {
        success = false;
        message = 'Field cannot be empty.';
      } else if (!Wrapper.containsAllowedCharacters(value)) {
        success = false;
        message = 'Field cannot contain special characters.';
      }

      this.props.errorPortal({
        id: this.state.id,
        success,
      });

      this.setState({
        validationFailed: !success ? {
          msg: message,
        } : null,
      });
    }

    render() {
      const classname = classNames('with-validation', {
        error: this.state.validationFailed,
      });
      const { validationFailed } = this.state;
      const errorMessage = validationFailed ? validationFailed.msg : '';
      const errorInfo = (
        <i className="error-info">{errorMessage}</i>
      );

      return (
        <div className={classname} ref={this.inputRef}>
          <WrappedComponent
            {...this.props}
            className={classname}
            validate={this.validate}
            error={this.state.validationFailed}
            id={this.state.id}
          />
          {/* css transition starts here */}
          <ReactCSSTransitionGroup
            transitionName="err-message"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {validationFailed ? errorInfo : null}
          </ReactCSSTransitionGroup>
          {/* css transition ends here */}
        </div>
      );
    }
  }

  Wrapper.propTypes = {
    // this property triggers a validation
    validateInput: PropTypes.bool,

    // input value
    value: PropTypes.string,

    // this prop can be used to inform the parent about the validation errors
    errorPortal: PropTypes.func.isRequired,
  };

  Wrapper.defaultProps = {
    value: '',
    validateInput: false,
  };

  return Wrapper;
}
