import { compose, withProps } from 'recompose';
import classNames from 'classnames';
import Button from './index';

const props = ({
  onClick, label, disable,
}) => ({
  onClick,
  label,
  disable,
  buttonClass: classNames('button-wrapper', {
    disabled: disable,
  }),
});

export default compose(withProps(props))(Button);
