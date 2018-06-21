import React from 'react';
import PropTypes from 'prop-types';
import '../../css/withControls.css';

export default function withControls(BaseComponent) {
  const Controls = ({
    mainClass, listItemWrapperClass,
    toggleControls, listControlsWrapper, onComplete, onDelete, name,
  }) =>
    (
      <div
        className={mainClass}
      >
        <div className={listItemWrapperClass}>
          <BaseComponent name={name} />
          <button
            className="open-list-control-config list-control-btn"
            onClick={toggleControls}
          >
            <i className="open-list-control-config-icon list-control-icon" />
          </button>
        </div>

        <div className={listControlsWrapper}>
          <div className="list-controls">
            <button className="mark-as-complete list-control-btn" onClick={onComplete}>
              <i className="list-control-icon" />
            </button>
            <button className="list-control-delete list-control-btn" onClick={onDelete}>
              <i className="list-control-icon" />
            </button>
          </div>
        </div>
      </div>
    );

  Controls.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    toggleControls: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,

    listControlsWrapper: PropTypes.string.isRequired,
    mainClass: PropTypes.string.isRequired,
    listItemWrapperClass: PropTypes.string.isRequired,
  };

  return Controls;
}
