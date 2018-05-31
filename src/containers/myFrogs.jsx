import { connect } from 'react-redux';
import MyFrogs from '../components/frogs/myfrogs/';
import { getAllTasks } from '../actions';

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
});

const mapStateToProps = state => ({ items: state.Task.allTasks });

export default connect(mapStateToProps, mapDispatchToProps)(MyFrogs);
