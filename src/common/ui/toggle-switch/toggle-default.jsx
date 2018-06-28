import { compose, withStateHandlers } from 'recompose';
import ToggleSwitch from './index';

const initialState = ({
  active = false, label, name,
}) => ({
  active,
  inActive: !active,
  label,
  name,
  animationEnabled: active,
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
