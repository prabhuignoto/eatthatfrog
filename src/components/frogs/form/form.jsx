import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import {
  TextInput,
  TextArea,
  Button,
  Smartags,
  ToggleSwitch,
} from '../../imports';
import './form.css';

const TaskForm = props => (
  <div className={classNames('form-container', { readonly: props.disabled })}>
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
        disabled={props.disabled}
      />
      {/* text area */}
      <TextArea
        label={props.textAreaLabel}
        validateInput={props.validateInput}
        onChange={props.handleTextArea}
        name="taskdescription"
        value={props.textAreaVal}
        errorPortal={props.handleErrorPortal}
        disabled={props.disabled}
      />
      <ToggleSwitch label="Remind me" name="form-reminder" disabled={props.disabled} />
      <Smartags
        label="Tag your task"
        validateInput={props.validateInput}
        validationMessages={{
          itemsEmpty: 'Please create atleast one category',
          hasDuplicates: 'A Category with that name already exists',
        }}
        isReadOnly={props.disabled}
        tags={[{ name: 'Productivity' }, { name: 'Excercise' }]}
      />
      <div className="form-controls">
        {!props.disabled ?
          <Button
            disable={props.formHasErrors || props.disableSaveBtn}
            label="Create"
            onClick={props.handleSave}
          /> : null
        }
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

  validateInput: PropTypes.bool.isRequired,
  disableSaveBtn: PropTypes.bool.isRequired,
  formHasErrors: PropTypes.bool.isRequired,

  disabled: PropTypes.bool,
};

TaskForm.defaultProps = {
  disabled: false,
};

export default TaskForm;
