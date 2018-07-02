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
  toggleControls, listControlsWrapper,
  name, id, onSelect, selected, status,
}) =>
  (
    <div
      className={mainClass}
      id={`list-controls-${id}`}
      key={`list-controls-${id}`}
    >
      <div
        className={listItemWrapperClass}
      >
        <ListItem name={name} id={id} onSelect={onSelect} selected={selected} status={status} />
        <button
          className="open-list-control-config list-control-btn"
          onClick={toggleControls}
        >
          <i className="open-list-control-config-icon list-control-icon" />
        </button>
      </div>

      <div className={listControlsWrapper}>
        <div className="list-controls" >
          {status === 'open' ?
            <TaskCompleteBtn
              portalTarget={`list-controls-${id}`}
              id={id}
              title="Finish Task."
            /> : null }
          <TaskDelBtn
            portalTarget={`list-controls-${id}`}
            id={id}
            title="Delete Task"
          />
        </div>
      </div>
    </div>
  );

Controls.propTypes = {
  toggleControls: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  listControlsWrapper: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  mainClass: PropTypes.string.isRequired,
  listItemWrapperClass: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export default Controls;
