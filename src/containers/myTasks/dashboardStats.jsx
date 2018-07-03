import { connect } from 'react-redux';
import { getOpenTasks, getCompletedTasks, getReminders } from '../../selectors/myTasks';
import DashboardStats from '../../components/myTasks/views/dashboardStats';

const mapStateToProps = ({ Task }) => ({
  openCount: getOpenTasks(Task),
  completedCount: getCompletedTasks(Task),
  remindersCount: getReminders(Task),
});

export default connect(mapStateToProps, null)(DashboardStats);
