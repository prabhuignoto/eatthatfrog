import { compose, lifecycle } from 'recompose';
import Notification from './notificationDefault';

export default compose(lifecycle({
  componentDidMount() {
    setTimeout(() => {
      this.props.close();
    }, this.props.autoCloseTimeout);
  },
}))(Notification);
