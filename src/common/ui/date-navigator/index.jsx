import { compose, withStateHandlers, withProps } from 'recompose';
import dateFNS from 'date-fns';
import { connect } from 'react-redux';
import Navigator from './views/navigator';

const initialState = ({ navigatorDate = new Date()}) => ({
  navigatorDate,
})

const stateHandlers = {
  onNavigateBack: ({ navigatorDate }) => () => ({
    navigatorDate: dateFNS.subDays(navigatorDate, 1)
  }),
  onNavigateForward: ({ navigatorDate }) => () => ({
    navigatorDate: dateFNS.addDays(navigatorDate, 1)
  })
}

export default compose(
  withStateHandlers(initialState, stateHandlers),
  withProps(({ navigatorDate }) => ({
    dateValue: dateFNS.format(navigatorDate, 'DD-MMM-YYYY'),
  }))
)(Navigator);
