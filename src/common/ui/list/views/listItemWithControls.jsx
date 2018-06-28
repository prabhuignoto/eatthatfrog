import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem';
import {
  taskCompleteAlertBtn as TaskCompleteBtn,
  taskDeleteAlertBtn as TaskDelBtn,
} from './listItemButtons';
import '../css/withControls.css';

const Controls = ({
  mainClass, listItemWrapperClass,
  toggleControls, listControlsWrapper, onComplete,
  onDelete, name, id, onSelect, selected,
}) =>
  (
    <div
      className={mainClass}
      id={`list-controls-${id}`}
    >
      <div
        className={listItemWrapperClass}
      >
        <ListItem name={name} id={id} onSelect={onSelect} selected={selected} />
        <button
          className="open-list-control-config list-control-btn"
          onClick={toggleControls}
        >
          <i className="open-list-control-config-icon list-control-icon" />
        </button>
      </div>

      <div className={listControlsWrapper}>
        <div className="list-controls" >
          <TaskCompleteBtn portalTarget={`list-controls-${id}`} />
          <TaskDelBtn portalTarget={`list-controls-${id}`} />
        </div>
      </div>
    </div>
  );

Controls.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleControls: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  listControlsWrapper: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  mainClass: PropTypes.string.isRequired,
  listItemWrapperClass: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Controls;
