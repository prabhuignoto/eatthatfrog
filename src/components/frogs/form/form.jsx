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
  onNameValidation,
  onDescriptionValidation,
  onTagsEdited,
  onReminderChanged,
}) => (
  <div className={classNames('form-container', { readonly: disabled })}>
    {/* form wrapper */}
    <div className="form-wrapper">
      {/* text input */}
      <TextInput
        label={taskLabel}
        onValidation={onNameValidation}
        name={taskName}
        disabled={disabled}
        required
      />
      {/* text area */}
      <TextArea
        label={descLabel}
        onValidation={onDescriptionValidation}
        name={descName}
        disabled={disabled}
        required
      />
      <ToggleSwitch
        label={reminderLabel}
        disabled={disabled}
        onToggleChanged={onReminderChanged}
      />
      <Smartags
        label={tagsLabel}
        disabled={disabled}
        tags={taskTags}
        onTagsEdited={onTagsEdited}
      />
      <div className="form-controls">
        {!disabled ?
          <Button
            disable={disableSaveBtn}
            label="Create"
            onClick={handleSave}
          /> : null
        }
      </div>
    </div>
  </div>
);

const attrShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

TaskForm.propTypes = {
  handleSave: PropTypes.func.isRequired,

  nameProp: attrShape.isRequired,
  descProp: attrShape.isRequired,
  reminderProp: attrShape.isRequired,
  tagsProp: attrShape.isRequired,
  taskTags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,

  onNameValidation: PropTypes.func.isRequired,
  onDescriptionValidation: PropTypes.func.isRequired,
  onTagsEdited: PropTypes.func.isRequired,
  onReminderChanged: PropTypes.func.isRequired,
  disableSaveBtn: PropTypes.bool.isRequired,

  disabled: PropTypes.bool,
};

TaskForm.defaultProps = {
  disabled: false,
};

export default TaskForm;
