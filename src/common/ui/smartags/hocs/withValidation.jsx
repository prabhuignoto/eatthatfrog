import React, { Component, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import SmartagsDefault from '../smartagsDefault';
import './withValidation.css';

export default (function listFoxWithValidation(WrappedComponent) {
  class ListFox extends Component {
    static hasDuplicates(collection) {
      const uniqueValues = _.chain(collection).map(x => x.name.toLowerCase()).uniq().value();
      return uniqueValues.length !== collection.length;
    }

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
      const { foxes: allFoxes } = this.ref.current.state;
      const noFoxes = allFoxes.length < 1;
      const hasDuplicates = ListFox.hasDuplicates(allFoxes);
      const isEmpty = _.some(allFoxes, x => !x.name);
      let message = null;

      if (hasDuplicates) {
        message = this.props.validationMessages.hasDuplicates;
      } else if (noFoxes) {
        message = this.props.validationMessages.itemsEmpty;
      } else if (isEmpty) {
        message = 'Cannot be empty';
      }

      this.setState({
        error: Object.assign({}, this.state.error, {
          message,
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
      hasDuplicates: PropTypes.string,
    }).isRequired,
    isReadOnly: PropTypes.bool,
  };

  ListFox.defaultProps = {
    isReadOnly: false,
  };

  return ListFox;
}(SmartagsDefault));
