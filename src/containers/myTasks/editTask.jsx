import { connect } from 'react-redux';
import AddTask from '../addTask/index';

const mapStateToProps = state => ({
  name: state.Task.selectedTask.name,
  description: state.Task.selectedTask.description,
});

export default connect(mapStateToProps, null)(AddTask);
