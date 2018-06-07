import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  TextArea,
  Button,
  ListFox,
} from '../../imports';
import './form.css';

const TaskForm = props => (
  <div className="form-container">
    {/* form header/ */}
    <div className="form-header">
      <i className="form-header-icon" />
      <h4>{props.heading}</h4>
    </div>
    {/* form wrapper */}
    <div className="form-wrapper">
      {/* text input */}
      <TextInput
        label={props.textInputLabel}
        validateInput={props.validateInput}
        name="taskname"
        onChange={props.handleTextInput}
        value={props.textInputVal}
        errorPortal={props.handleErrorPortal}
        isReadOnly={props.isReadOnly}
      />
      {/* text area */}
      <TextArea
        label={props.textAreaLabel}
        validateInput={props.validateInput}
        onChange={props.handleTextArea}
        name="taskdescription"
        value={props.textAreaVal}
        errorPortal={props.handleErrorPortal}
        isReadOnly={props.isReadOnly}
      />
      {/* foxy list */}
      <div className="listfox-title">
        Choose a category for your task
      </div>
      <ListFox
        validateInput={props.validateInput}
        validationMessages={{
          itemsEmpty: 'Please create atleast one category',
          hasDuplicates: 'A Category with that name already exists',
        }}
        isReadOnly={props.isReadOnly}
        foxes={[{ name: 'Productivity' }, { name: 'Excercise' }]}
      />
      <div className="form-controls">
        <Button
          disable={props.formHasErrors || props.disableSaveBtn}
          label="Save"
          onClick={props.handleSave}
        />
      </div>
    </div>
  </div>
);

TaskForm.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleErrorPortal: PropTypes.func.isRequired,
  handleTextArea: PropTypes.func.isRequired,
  handleTextInput: PropTypes.func.isRequired,

  textAreaLabel: PropTypes.string.isRequired,
  textInputLabel: PropTypes.string.isRequired,
  textInputVal: PropTypes.string.isRequired,
  textAreaVal: PropTypes.string.isRequired,

  heading: PropTypes.string.isRequired,
  validateInput: PropTypes.bool.isRequired,
  disableSaveBtn: PropTypes.bool.isRequired,
  formHasErrors: PropTypes.bool.isRequired,

  isReadOnly: PropTypes.bool,
};

TaskForm.defaultProps = {
  isReadOnly: false,
};

export default TaskForm;
