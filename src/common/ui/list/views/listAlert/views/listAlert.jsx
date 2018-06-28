import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../css/listalert.css';

const ListAlert = ({
  children, hide, visible, portalTarget,
}) => {
  const view = (
    <div
      className={classNames('listalert-wrapper', {
      visible,
      hidden: !visible,
    })}
      role="button"
      tabIndex="0"
    >
      <div className="listalert-body">
        {React.Children.map(
          children,
          child => React.cloneElement(child, { cancel: hide }),
        )}
      </div>
    </div>);
  return visible ? ReactDOM.createPortal(view, document.getElementById(portalTarget)) : null;
};

ListAlert.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool,
  hide: PropTypes.func.isRequired,
};

ListAlert.defaultProps = {
  visible: false,
};

export default ListAlert;
