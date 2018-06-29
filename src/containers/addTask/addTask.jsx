import { connect } from 'react-redux';
import { saveTask } from '../../actions';
import AddTask from './index';

const mapDispatchToProps = dispatch => (({
  saveTaskToDB: (
    name,
    description,
    reminderEnabled,
    tags,
    status,
  ) => {
    dispatch(saveTask(name, description, reminderEnabled, tags, status));
  },
}));

export default connect(null, mapDispatchToProps)(AddTask);
