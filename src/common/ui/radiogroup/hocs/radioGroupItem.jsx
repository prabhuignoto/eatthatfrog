import { compose, withProps } from 'recompose';
import classNames from 'classnames';
import RadioGroupItem from '../components/radioGroupItem/index';

const props = ({
  id, name, toggleSelection, selected,
}) => ({
  id,
  name,
  toggleSelection,
  foxClass: classNames('fox', {
    selected,
  }),
  foxIcon: classNames('fox-icon', {
    selected,
  }),
});


export default compose(withProps(props))(RadioGroupItem);
