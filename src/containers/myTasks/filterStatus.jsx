import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import _ from 'lodash';
import FilterStatus from '../../components/myTasks/views/filterStatus';

const mapStateToProps = ({ Task }) => ({
  filter: Task.filter,
});

export default compose(
  connect(mapStateToProps, null),
  withProps(({
    filter: {
      today, older, open, completed,
      time = _.compact([(today ? 'today' : undefined), (older ? 'older' : undefined)]),
      status = _.compact([(open ? 'open' : undefined), (completed ? 'completed' : undefined)]),
    },
  }) => ({
    message: `showing tasks from 
      ${time.join(' & ')} with status ${status.join(' or ')}.`,
  })),
)(FilterStatus);
