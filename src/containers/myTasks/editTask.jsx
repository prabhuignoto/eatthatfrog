import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { getSelectedTask } from '../../selectors/myTasks';
import EditTask from '../addTask/index';
import { editTask } from '../../actions';

const mapStateToProps = ({ Task }) => {
  const {
    name, description, id, taskTags = [],
  } = getSelectedTask(Task);
  return {
    name, description, id, tags: taskTags,
  };
};

const mapDispatchToProps = dispatch => ({
  saveTaskToDB: (
    name,
    id,
    description,
    reminderEnabled,
    tags,
    status,
  ) => dispatch(editTask(name, id, description, reminderEnabled, tags, status)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps(() => ({
    formMode: 'edit',
  })),
)(EditTask);
