import React, { Component, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListFoxDefault from '../listFoxDefault';
import './withValidation.css';

export default (function listFoxWithValidation(WrappedComponent) {
  class ListFox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: {
          message: null,
        },
      };
      this.ref = createRef();
      this.validate = this.validate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      const [nPropsValidateInput, thisPropsValidateInput] = [
        nextProps.validateInput,
        this.props.validateInput,
      ];
      if (nPropsValidateInput && (thisPropsValidateInput !== nPropsValidateInput)) {
        this.validate();
      }
    }

    validate() {
      const noFoxes = this.ref.current.state.foxes.length < 1;
      this.setState({
        error: Object.assign({}, this.state.error, {
          message: noFoxes ? this.props.validationMessages.itemsEmpty : null,
        }),
      });
    }

    render() {
      const validationResult = (
        <span className="error-info-listfox">
          {this.state.error.message}
        </span>
      );
      const wrapperClass = classNames('listfox-with-validation-wrapper', {
        error: this.state.error.message,
      });
      return (
        <Fragment>
          <div className={wrapperClass}>
            <WrappedComponent
              {...this.props}
              ref={this.ref}
              onListFoxChanged={this.validate}
            />
          </div>
          {this.state.error.message ? validationResult : null }
        </Fragment>
      );
    }
  }

  ListFox.propTypes = {
    validateInput: PropTypes.bool.isRequired,
    validationMessages: PropTypes.shape({
      itemsEmpty: PropTypes.string,
    }).isRequired,
  };

  return ListFox;
}(ListFoxDefault));
