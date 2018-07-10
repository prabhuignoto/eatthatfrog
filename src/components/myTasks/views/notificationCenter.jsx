import React from 'react';
import PropTypes from 'prop-types';
import Notification from './notification';
import '../css/notificationCenter.scss';
import { dismissReminder } from '../../../actions';

const notificationCenter = ({ onClose, notifications, dismissReminder }) => (
  <div className="notification-center-wrapper">
    <button
      className="close-notification-center"
      type="button"
      onClick={onClose}
    >close</button>
    { notifications.length > 0 ?
      <div className="notification-items-wrapper">
        {notifications.map(notification => 
            <Notification{...notification} key={notification.id} dismissReminder={dismissReminder} />)}
      </div>
      :
      <div className="notification-items-notavailable">
        <span style={{ display: 'flex', position: 'relative', height: '100px', marginBottom: '20px' }}>
          <div className="safety-cone cone-2" role="img" />
          <div className="safety-cone" role="img" />
        </span>
        You do not have notifications at the moment.
      </div>
    }
  </div>
);

notificationCenter.propTypes = {
  onClose: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default notificationCenter;

