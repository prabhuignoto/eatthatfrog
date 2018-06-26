import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import List from '../../common/ui/list/views/list';
import { getTaskDetails as GetTaskDetailsActCreator } from '../../actions';

const initialState = ({ selectedListItem = {} }) => ({
  selectedListItem,
});

const stateHandlers = {
  onListItemSelected: (state, { getTaskDetails }) => id => getTaskDetails(id),
};

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(GetTaskDetailsActCreator(id)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
)(List);
