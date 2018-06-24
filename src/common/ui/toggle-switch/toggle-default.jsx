import { compose, withStateHandlers } from 'recompose';
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
  onToggle: ({ active, inActive }, { onToggleChanged }) => () => {
    let result = null;
    result = {
      active: !active,
      inActive: !inActive,
      animationEnabled: true,
    };
    onToggleChanged(result);
    return result;
  },
};

export default compose(withStateHandlers(
  initialState,
  stateHandlers,
))(ToggleSwitch);
