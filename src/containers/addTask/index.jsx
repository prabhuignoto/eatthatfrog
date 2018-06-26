import { withStateHandlers, compose, withProps, lifecycle } from 'recompose';
import Form from '../../components/frogs/form/form';
import Validation from '../../utils/validation';

const initialState = ({
  disableSaveBtn = true,
  reminderEnabled = false,
  name = '',
  description = '',
  taskTags = [{ name: 'Productivity' }, { name: 'Excercise' }],
  nameValidation = { success: true, error: { reason: '' } },
  descValidation = { success: true, error: { reason: '' } },
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
      taskTags: tagsData.tags.map(x => x.name),
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
  },
  lifecycle({
    getSnapshotBeforeUpdate(props) {
      this.setState({
        name: props.name,
        description: props.description,
      });
    }
  })),
)(Form);
