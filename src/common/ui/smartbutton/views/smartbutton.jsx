import React from 'react';
import classNames from 'classnames';
import { bool, func, string } from 'prop-types';
import '../css/smartbutton.css';

const smartbutton = ({
  icon, blink, additionalText,
  toggleAdditionalText, showAdditionalText, onSmartClick,
}) => {
  const smartButtonWrapperCls = classNames('smart-button-wrapper', {
    blink,
  });
  return (
    <div
      className={smartButtonWrapperCls}
      onMouseEnter={toggleAdditionalText}
      onMouseLeave={toggleAdditionalText}
    >
      <button className="smart-button" onClick={onSmartClick} type="button">
        <i className={icon} />
      </button>
      <span className="notification-dot" />
      {showAdditionalText
        ? (
          <div className="additional-text-wrapper">
            <span>{additionalText}</span>
          </div>
        ) : null }
    </div>
  );
};

smartbutton.propTypes = {
  blink: bool.isRequired,
  showAdditionalText: bool.isRequired,
  additionalText: string.isRequired,
  icon: string,
  toggleAdditionalText: func.isRequired,
  onSmartClick: func.isRequired,
};

smartbutton.defaultProps = {
  icon: '',
};

export default smartbutton;
