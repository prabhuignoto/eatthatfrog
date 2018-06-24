import { withStateHandlers, compose, onlyUpdateForKeys, withProps } from 'recompose';
import { connect } from 'react-redux';
import saveTask from './actions';
import Form from './form';


const initialState = ({
  disableSaveBtn = true,
  reminderEnabled = false,
  nameValue = '',
  descriptionValue = '',
}) => ({
  disableSaveBtn,
  nameValidationFailed: true,
  descriptionValidationFailed: true,

  taskTags: [{ name: 'Productivity' }, { name: 'Excercise' }],
  reminderEnabled,
  nameValue,
  descriptionValue,
});

const mapDispatchToProps = dispatch => (({
  saveTaskToDB: (
    name,
    description,
    reminderEnabled,
    tags,
  ) => {
    dispatch(saveTask(name, description, reminderEnabled, tags));
  },
}));

export default compose(
  connect(null, mapDispatchToProps),
  onlyUpdateForKeys(['disableSaveBtn', 'disabled']),
  withProps(() => ({
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
  })),
  withStateHandlers(initialState, {
    onNameValidation: ({ descriptionValidationFailed }) => (result) => {
      // saveTaskToDB();
      // prepare the result object
      let res = {};

      // disable the save button if the validation failed
      if (!result.validation.success) {
        res = {
          disableSaveBtn: true,
          nameValidationFailed: true,
        };
      } else {
        res = {
          disableSaveBtn: true && descriptionValidationFailed,
          nameValidationFailed: false,
          nameValue: result.value,
        };
      }
      return res;
    },
    onDescriptionValidation: ({ nameValidationFailed }) => (result) => {
      let res = {};
      if (!result.validation.success) {
        res = {
          disableSaveBtn: true,
          descriptionValidationFailed: true,
        };
      } else {
        res = {
          disableSaveBtn: true && nameValidationFailed,
          descriptionValidationFailed: false,
          descriptionValue: result.value,
        };
      }
      return res;
    },
    onTagsEdited: () => tagsData => ({
      taskTags: tagsData.tags.map(x => x.name),
    }),
    handleSave: ({
      nameValue,
      descriptionValue,
      reminderEnabled,
      taskTags,
    }, { saveTaskToDB }) => () => {
      saveTaskToDB(nameValue, descriptionValue, reminderEnabled, taskTags);
    },
    onReminderChanged: () => ({ active }) => ({
      reminderEnabled: active,
    }),
  }),
)(Form);
