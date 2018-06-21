import { withProps, compose } from 'recompose';
import classNames from 'classnames';
import Notification from './index';

const props = ({
  title, message, close, type,
}) => ({
  title,
  message,
  close,
  type,
  notsClass: classNames('nots-container', {
    [type]: true,
  }),
  notsHdrIcon: classNames('nots-hdr-icon', {
    [type]: true,
  }),
});

export default compose(withProps(props))(Notification);
