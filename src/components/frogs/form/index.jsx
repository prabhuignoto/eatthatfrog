import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import TextInput from '../../common/form/textinput/withValidation';
import TextArea from '../../common/form/textarea/withValidation';
import Button from '../../common/form/button';
import Notification from '../../common/notification';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationVisible: false,
      validateInput: false,
      name: '',
      description: '',
      formErrors: [],
    };
    this.handleSave = this.handleSave.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
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
    if (name && description) {
      this.props.saveForm(name, description);
      this.setState({
        notificationVisible: true,
      });
    } else {
      this.setState({
        validateInput: true,
      });
    }
  }

  handleErrorPortal(errorInfo) {
    const { formErrors } = this.state;
    let updatedFormErrors = _.reject(formErrors, x => x.id === errorInfo.id);
    updatedFormErrors = updatedFormErrors.concat([errorInfo]);

    this.setState({
      formErrors: updatedFormErrors,
    });
  }

  closeNotification() {
    this.setState({
      notificationVisible: false,
    });
  }

  render() {
    const formHasErrors = _.chain(this.state.formErrors)
      .filter(x => x.success === false)
      .size() > 0;
    return (
      <Fragment>
        <div className="form-container">
          <h4>{this.props.heading}</h4>
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
            <Button disable={formHasErrors} label="Save" onClick={this.handleSave} />
          </div>
        </div>
        <Notification
          title="Task added"
          message="Task added Successfully"
          visible={this.state.notificationVisible}
          close={this.closeNotification}
        />
      </Fragment>
    );
  }
}

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  saveForm: PropTypes.func.isRequired,
};

export default Form;
