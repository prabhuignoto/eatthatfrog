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

export default connect(null, mapDispatchToProps)(AddTask);
