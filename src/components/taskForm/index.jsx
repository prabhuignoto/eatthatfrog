import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import {
  Button,
  Smartags,
  ToggleSwitch,
  TextInputWithValidation as TextInput,
  TextAreaWithValidation as TextArea,
} from '../imports';
import './css/form.css';

const TaskForm = ({
  nameProp: { name: taskName, label: taskLabel },
  descProp: { name: descName, label: descLabel },
  reminderProp: { label: reminderLabel },
  tagsProp: { label: tagsLabel },
  taskTags,
  disabled,
  handleSave,
  disableSaveBtn,
  onTagsEdited,
  onReminderChanged,

  onNameChanged,
  onDescriptionChanged,
  name,
  description,
  nameValidation,
  descValidation,
  reminderEnabled,
  formMode,
}) => (
  <div className={classNames('form-container', { readonly: disabled })}>
    {/* form wrapper */}
    <div className="form-wrapper">
      {/* text input */}
      <TextInput
        label={taskLabel}
        name={taskName}
        disabled={disabled}
        required
        onChange={onNameChanged}
        value={name}
        validation={nameValidation}
      />
      {/* text area */}
      <TextArea
        label={descLabel}
        name={descName}
        disabled={disabled}
        required
        onChange={onDescriptionChanged}
        value={description}
        validation={descValidation}
      />
      <ToggleSwitch
        label={reminderLabel}
        disabled={disabled}
        onToggleChanged={onReminderChanged}
        active={reminderEnabled}
      />
      <Smartags
        label={tagsLabel}
        disabled={disabled}
        tags={taskTags}
        onTagsEdited={onTagsEdited}
      />
      <div className="form-controls">
        <Button
          disable={disableSaveBtn}
          label={formMode === 'edit' ? 'Save changes' : 'Create'}
          onClick={handleSave}
        />
      </div>
    </div>
  </div>);

const attrShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

TaskForm.propTypes = {
  handleSave: PropTypes.func.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onDescriptionChanged: PropTypes.func.isRequired,

  name: PropTypes.string,
  description: PropTypes.string,

  nameProp: attrShape.isRequired,
  descProp: attrShape.isRequired,
  reminderProp: attrShape.isRequired,
  tagsProp: attrShape.isRequired,
  taskTags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onTagsEdited: PropTypes.func.isRequired,
  onReminderChanged: PropTypes.func.isRequired,
  disableSaveBtn: PropTypes.bool.isRequired,

  disabled: PropTypes.bool,
  formMode: PropTypes.string.isRequired,
};

TaskForm.defaultProps = {
  disabled: false,
  name: '',
  description: '',
};

export default TaskForm;
