import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getAllReminders } from '../../selectors/myTasks';
import NotificationCenter from '../../components/myTasks/views/notificationCenter';
import { dismissReminder as DismissReminder } from '../../actions';

const mapStateToProps = ({ Task }) => ({
  notifications: getAllReminders(Task),
});

const mapDispatchToProps = dispatch => ({
  dismissReminder: id => dispatch(DismissReminder(id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(NotificationCenter);
