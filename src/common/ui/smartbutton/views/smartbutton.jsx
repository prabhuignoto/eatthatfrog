// @flow

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../css/smartbutton.css';

type Props = {
  blink: boolean,
  showAdditionalText: boolean,
  additionalText: string,
  icon: string,
}

const smartbutton = ({
  icon, blink, additionalText,
  toggleAdditionalText, showAdditionalText, onSmartClick,
}: Props) => {
  const smartButtonWrapperCls = classNames('smart-button-wrapper', {
    blink,
  });
  return (
    <div
      className={smartButtonWrapperCls}
      onMouseEnter={toggleAdditionalText}
      onMouseLeave={toggleAdditionalText}
    >
      <button className="smart-button" onClick={onSmartClick}>
        <i className={icon} />
      </button>
      <span className="notification-dot" />
      {showAdditionalText ?
        <div className="additional-text-wrapper">
          <span>{additionalText}</span>
        </div> : null }
    </div>
  );
};

smartbutton.propTypes = {
  blink: PropTypes.bool.isRequired,
  showAdditionalText: PropTypes.bool.isRequired,
  additionalText: PropTypes.string.isRequired,
  icon: PropTypes.string,
  toggleAdditionalText: PropTypes.func.isRequired,
  onSmartClick: PropTypes.func.isRequired,
};

smartbutton.defaultProps = {
  icon: '',
};

export default smartbutton;
