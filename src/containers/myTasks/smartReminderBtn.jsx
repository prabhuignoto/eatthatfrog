import { compose, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { getReminders } from '../../selectors/myTasks';
import SmartButton from '../../common/ui/smartbutton/views/smartbutton';

const mapStateToProps = ({ Task }) => ({
  remindersAvailable: getReminders(Task) > 0,
});

const initialState = ({
  showReminders = false,
  showAdditionalText = false,
}) => ({
  showReminders,
  showAdditionalText,
});

const stateHandlers = {
  toggleAdditionalText: ({ showAdditionalText }, { remindersAvailable }) => () => ({
    showAdditionalText: remindersAvailable ? !showAdditionalText : false,
  }),
  onSmartClick: (state, { onShowNotificationCenter }) => () => {
    onShowNotificationCenter();
  },
};

export default compose(
  connect(mapStateToProps, null),
  withProps(({ remindersAvailable }) => ({
    blink: remindersAvailable,
  })),
  withStateHandlers(initialState, stateHandlers),
)(SmartButton);

