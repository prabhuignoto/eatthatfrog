import { connect } from 'react-redux';
import AddFrog from '../components/frogs/addfrog';
import addTask from '../actions';

const mapDispatchToProps = dispatch => ({
  saveForm: (name, description) => {
    dispatch(addTask(name, description));
  },
});

export default connect(null, mapDispatchToProps)(AddFrog);
