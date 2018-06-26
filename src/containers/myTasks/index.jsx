import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import MyTasks from '../../components/myTasks/views/myTasks';
import { getAllTasks } from '../../actions';

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
});

const mapStateToProps = state => ({ items: state.Task.allTasks });

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getAllTasks();
    },
  }),
)(MyTasks);
