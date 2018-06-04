import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';
import {
  TextInput,
  TextArea,
  Button,
  Notification,
  Popup
} from '../../imports';
import './form.css';

class Form extends Component {
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
    } else if (!Form.hasErrors(this.state.formErrors)) {
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
      errorNotifVisible: Form.hasErrors(updatedFormErrors),
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
    const formHasErrors = Form.hasErrors(this.state.formErrors);
    return (
      <Fragment>
        {this.state.redirectToSuccessPage ? <Redirect to="/addTaskSuccess" /> : null}
        {/* main form container */}
        <div className="form-container">
          {/* form header/ */}
          <div className="form-header">
            <i className="form-header-icon" />
            <h4>{this.props.heading}</h4>
          </div>
          {/* form wrapper */}
          <div className="form-wrapper">
            {/* text input */}
            <TextInput
              label="Name"
              validateInput={this.state.validateInput}
              name="taskname"
              onChange={this.handleTextInput}
              value={this.state.name}
              errorPortal={this.handleErrorPortal}
            />
            {/* text area */}
            <TextArea
              label="Description"
              validateInput={this.state.validateInput}
              onChange={this.handleTextArea}
              name="taskdescription"
              value={this.state.description}
              errorPortal={this.handleErrorPortal}
            />
            <div className="form-controls">
              <Button
                disable={formHasErrors || this.state.disableSaveBtn}
                label="Save"
                onClick={this.handleSave}
              />
            </div>
          </div>
        </div>
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

Form.propTypes = {
  // string for the form title
  heading: PropTypes.string.isRequired,

  // function to invoke the save via sagas
  saveForm: PropTypes.func.isRequired,

  // checks for the duplicate name on the store via the sagas
  // checkDuplicate: PropTypes.func.isRequired,
};

export default Form;
