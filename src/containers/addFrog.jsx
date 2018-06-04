import { connect } from 'react-redux';
import AddFrog from '../components/frogs/addfrog';
import { addTask, checkForDuplicate } from '../actions';

const mapDispatchToProps = dispatch => ({
  saveForm: (name, description) => {
    dispatch(addTask(name, description));
  },
  checkForDuplicate: name => (dispatch(checkForDuplicate(name))),
});

export default connect(null, mapDispatchToProps)(AddFrog);
