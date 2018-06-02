import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';
import { TextInput, TextArea, Button, Notification } from '../../imports';
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

  handleTextArea(ev) {
    this.setState({
      description: ev.target.value,
    });
  }

  handleTextInput(ev) {
    this.setState({
      name: ev.target.value,
    });
  }

  handleSave() {
    const { name, description } = this.state;
    if (!name || !description) {
      this.setState({
        validateInput: true,
        errorNotifVisible: true,
      });
    } else if (!Form.hasErrors(this.state.formErrors)) {
      this.props.saveForm(name, description);
      this.setState({
        successNotifVisible: true,
        disableSaveBtn: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            redirectToSuccessPage: true,
          });
        }, 1000);
      });
    }
  }

  handleErrorPortal(errorInfo) {
    const { formErrors } = this.state;
    let updatedFormErrors = _.reject(formErrors, x => x.id === errorInfo.id);
    updatedFormErrors = updatedFormErrors.concat([errorInfo]);

    this.setState({
      formErrors: updatedFormErrors,
      errorNotifVisible: Form.hasErrors(updatedFormErrors),
    });
  }

  closeSuccessNotification() {
    this.setState({
      successNotifVisible: false,
    });
  }

  closeErrorNotification() {
    this.setState({
      errorNotifVisible: false,
    });
  }

  render() {
    const formHasErrors = Form.hasErrors(this.state.formErrors);
    return (
      <Fragment>
        {this.state.redirectToSuccessPage ? <Redirect to="/addTaskSuccess" /> : null}
        <div className="form-container">
          <div className="form-header">
            <i className="form-header-icon" />
            <h4>{this.props.heading}</h4>
          </div>
          <div className="form-wrapper">
            <TextInput
              label="Name"
              validateInput={this.state.validateInput}
              name="taskname"
              onChange={this.handleTextInput}
              value={this.state.name}
              errorPortal={this.handleErrorPortal}
            />
            <TextArea
              label="Description"
              validateInput={this.state.validateInput}
              onChange={this.handleTextArea}
              name="taskdescription"
              value={this.state.description}
              errorPortal={this.handleErrorPortal}
            />
            <Button
              disable={formHasErrors || this.state.disableSaveBtn}
              label="Save"
              onClick={this.handleSave}
            />
          </div>
        </div>
        <TransitionGroup
          transitionName="transition-area"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.successNotifVisible ?
            <Notification
              title="Task added"
              message="Task added Successfully"
              close={this.closeSuccessNotification}
              type="success"
              autoCloseTimeout={2500}
            /> : null}
          {this.state.errorNotifVisible ?
            <Notification
              title="Error"
              message="Please correct the errors."
              close={this.closeErrorNotification}
              type="error"
              autoCloseTimeout={3500}
            /> : null}
        </TransitionGroup>
      </Fragment>
    );
  }
}

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  saveForm: PropTypes.func.isRequired,
};

export default Form;
