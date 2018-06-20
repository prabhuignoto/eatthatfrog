import { compose, withStateHandlers, lifecycle } from 'recompose';
import ToggleSwitch from './index';

const initialState = ({
  active = false, inActive = true, label, name,
}) => ({
  active,
  inActive,
  label,
  name,
  animationEnabled: false,
});

const stateHandlers = {
  onToggle: ({ active, inActive }) => () => ({
    active: !active,
    inActive: !inActive,
    animationEnabled: true,
  }),
};

export default compose(withStateHandlers(
  initialState,
  stateHandlers,
))(ToggleSwitch);
