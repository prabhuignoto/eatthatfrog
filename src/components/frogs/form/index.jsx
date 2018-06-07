import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';
import {
  Notification,
} from '../../imports';
import Form from './form';

class FormDefault extends Component {
  static hasErrors(formErrors) {
    return _.chain(formErrors)
      .some(x => x.success === false).value();
  }

  constructor(props) {
    super(props);
    this.state = {
      successNotifVisible: false,
      errorNotifVisible: false,
      validateInput: false,
      name: '',
      description: '',
      formErrors: [],
      redirectToSuccessPage: false,
      disableSaveBtn: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.closeSuccessNotification = this.closeSuccessNotification.bind(this);
    this.closeErrorNotification = this.closeErrorNotification.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleErrorPortal = this.handleErrorPortal.bind(this);
  }

  // controls the state on the text area
  handleTextArea(ev) {
    this.setState({
      description: ev.target.value,
    });
  }

  // controls the state on the text input
  handleTextInput(ev) {
    this.setState({
      name: ev.target.value,
    });
  }

  // method to handle the save functionality
  handleSave() {
    // pull the name and description from the state
    const { name, description } = this.state;

    // check if the name and description are empty
    if (!name || !description) {
      // invoke the validation on the form controls
      // to display the error message
      this.setState({
        validateInput: true,
        errorNotifVisible: true,
      });
      // check if the form controls have acceptable input and
      // invoke the save via sagas
    } else if (!FormDefault.hasErrors(this.state.formErrors)) {
      this.props.saveForm(name, description);
      this.setState({
        successNotifVisible: true,
        disableSaveBtn: true,
      }, () => {
        // redirect to  the success page,
        // once the states are updated
        setTimeout(() => {
          this.setState({
            redirectToSuccessPage: true,
          });
        }, 1000);
      });
    }
  }

  // portal via which the form controls would inform validation errors
  // to the parent form
  handleErrorPortal(errorInfo) {
    const { formErrors } = this.state;
    // update the formErrors collection
    let updatedFormErrors = _.reject(formErrors, x => x.id === errorInfo.id);
    updatedFormErrors = updatedFormErrors.concat([errorInfo]);

    // update the state
    this.setState({
      formErrors: updatedFormErrors,
      errorNotifVisible: FormDefault.hasErrors(updatedFormErrors),
    });
  }

  // closes the success Notification
  closeSuccessNotification() {
    this.setState({
      successNotifVisible: false,
    });
  }

  // closes the error notification
  closeErrorNotification() {
    this.setState({
      errorNotifVisible: false,
    });
  }

  // react renderer
  render() {
    const formHasErrors = FormDefault.hasErrors(this.state.formErrors);
    return (
      <Fragment>
        {this.state.redirectToSuccessPage ? <Redirect to="/addTaskSuccess" /> : null}
        {/* main form */}
        <Form
          handleSave={this.handleSave}
          handleErrorPortal={this.handleErrorPortal}
          handleTextArea={this.handleTextArea}
          handleTextInput={this.handleTextInput}
          heading={this.props.heading}
          textInputLabel="Name"
          textAreaLabel="Description"
          textInputVal={this.state.name}
          textAreaVal={this.state.description}
          validateInput={this.state.validateInput}
          disableSaveBtn={this.state.disableSaveBtn}
          formHasErrors={formHasErrors}
        />
        {/* transition group for the notifications starts */}
        <TransitionGroup
          transitionName="transition-area"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {/* display success notification */}
          {this.state.successNotifVisible ?
            <Notification
              title="Task added"
              message="Task added Successfully"
              close={this.closeSuccessNotification}
              type="success"
              autoCloseTimeout={2500}
            /> : null}
          {/* display error notification   */}
          {this.state.errorNotifVisible ?
            <Notification
              title="Error"
              message="Please correct the errors."
              close={this.closeErrorNotification}
              type="error"
              autoCloseTimeout={3500}
            /> : null}
        </TransitionGroup>
        {/* transition group for the notifications ends */}
      </Fragment>
    );
  }
}

FormDefault.propTypes = {
  // string for the form title
  heading: PropTypes.string.isRequired,

  // function to invoke the save via sagas
  saveForm: PropTypes.func.isRequired,
};

export default FormDefault;
