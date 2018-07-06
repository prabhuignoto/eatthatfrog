import { compose, defaultProps } from 'recompose';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
import AddTask from './index';

const mapDispatchToProps = dispatch => (({
  saveTaskToDB: (
    name,
    description,
    reminderEnabled,
    tags,
    status,
  ) => {
    dispatch(addTask(name, description, reminderEnabled, tags, status));
  },
}));

export default compose(
  connect(null, mapDispatchToProps),
  defaultProps({
    taskTags: [{ name: 'swimming', id: 'swim' }, { name: 'running', id: 'run' }],
  }),
)(AddTask);
