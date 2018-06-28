import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import AddTask from '../addTask/index';

const mapStateToProps = state => ({
  name: state.Task.selectedTask.name,
  description: state.Task.selectedTask.description,
});

export default compose(
  connect(mapStateToProps, null),
  withProps(() => ({
    formMode: 'edit',
  })),
)(AddTask);
