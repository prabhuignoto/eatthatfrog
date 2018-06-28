import { withStateHandlers, compose, withProps } from 'recompose';
import Form from '../../components/taskForm';
import Validation from '../../utils/validation';

const initialState = ({
  disableSaveBtn = true,
  reminderEnabled = false,
  name = '',
  description = '',
  taskTags = [{ name: 'Productivity', id: 'prod' }, { name: 'Excercise', id: 'excercise' }],
  nameValidation = { success: true, error: { reason: '' } },
  descValidation = { success: true, error: { reason: '' } },
  formMode= 'create',
}) => ({
  disableSaveBtn,
  nameValidationFailed: true,
  descriptionValidationFailed: true,
  taskTags,
  reminderEnabled,
  name,
  description,
  nameValidation,
  descValidation,
  formMode,
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
    onTagsEdited: () => tagsData => ({
      taskTags: tagsData.tags.map(x => x),
    }),
    handleSave: ({
      name,
      description,
      reminderEnabled,
      taskTags,
    }, { saveTaskToDB }) => () => {
      saveTaskToDB(name, description, reminderEnabled, taskTags);
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
