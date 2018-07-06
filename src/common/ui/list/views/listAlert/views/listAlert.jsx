import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { element, func, bool } from 'prop-types';
import '../css/listalert.css';

const ListAlert = ({
  children, hide, visible, portalTarget, removeTask, completeTask, restoreTask,
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
          child => React.cloneElement(child, {
            cancel: hide,
            remove: removeTask,
            complete: completeTask,
            restore: restoreTask,
          }),
        )}
      </div>
    </div>);
  return visible ? ReactDOM.createPortal(view, document.getElementById(portalTarget)) : null;
};

ListAlert.propTypes = {
  children: element.isRequired,
  visible: bool,
  hide: func.isRequired,
};

ListAlert.defaultProps = {
  visible: false,
};

export default ListAlert;
