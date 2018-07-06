import { withStateHandlers, compose, withProps } from 'recompose';
import Form from '../../components/taskForm';
import Validation from '../../utils/validation';

const initialState = ({
  reminderEnabled = false,
  name = '',
  description = '',
  taskTags = [],
  nameValidation = { success: true, error: { reason: '' } },
  descValidation = { success: true, error: { reason: '' } },
  formMode = 'create',
  status = 'open',
  id,
}) => ({
  nameValidationFailed: !name,
  descriptionValidationFailed: !description,
  disableSaveBtn: !name && !description,
  taskTags,
  reminderEnabled,
  name,
  description,
  nameValidation,
  descValidation,
  formMode,
  status,
  id,
});

export default compose(
  withProps(({ name, description }) => ({
    nameProp: {
      name: 'name',
      label: 'Name',
    },
    descProp: {
      name: 'description',
      label: 'Description',
    },
    reminderProp: {
      name: 'remind-me',
      label: 'Remind Me',
    },
    tagsProp: {
      name: 'smartags-tasks',
      label: 'Tag your tasks',
    },
    name,
    description,
  })),
  withStateHandlers(initialState, {
    onTagsEdited: () => tags => ({
      taskTags: tags.map(x => x),
    }),
    handleSave: ({
      name,
      description,
      reminderEnabled,
      taskTags,
      status,
    }, { saveTaskToDB, onSaved, id }) => () => {
      if (id) {
        saveTaskToDB(name, id, description, reminderEnabled, taskTags, status);
      } else {
        saveTaskToDB(name, description, reminderEnabled, taskTags, status);
      }
      if (onSaved) {
        onSaved();
      }
    },
    onReminderChanged: () => ({ active }) => ({
      reminderEnabled: active,
    }),
    onNameChanged: ({ descriptionValidationFailed }) => ({ target: { value } }) => {
      const { name, validation: nameValidation } = Validation('name', value);
      let valResult = null;
      if (!nameValidation.success) {
        valResult = {
          disableSaveBtn: true,
          nameValidationFailed: true,
        };
      } else {
        valResult = {
          disableSaveBtn: true && descriptionValidationFailed,
          nameValidationFailed: false,
        };
      }
      return Object.assign({ name, nameValidation }, valResult);
    },
    onDescriptionChanged: ({ nameValidationFailed }) => ({ target: { value } }) => {
      let valResult = {};
      const { description, validation: descValidation } = Validation('description', value);
      // disable the save button if the validation failed
      if (!descValidation.success) {
        valResult = {
          disableSaveBtn: true,
          descriptionValidationFailed: true,
        };
      } else {
        valResult = {
          disableSaveBtn: true && nameValidationFailed,
          descriptionValidationFailed: false,
        };
      }
      return Object.assign(
        { description, descValidation },
        valResult,
      );
    },
  }),
)(Form);
