import React from 'react';
import { func, string, bool } from 'prop-types';
import ListItem from './listItem';
import {
  taskCompleteAlertBtn as TaskCompleteBtn,
  taskDeleteAlertBtn as TaskDelBtn,
  taskRestoreAlertBtn as TasRestoreBtn,
} from './listItemButtons';
import '../css/withControls.css';

const Controls = ({
  mainClass, listItemWrapperClass,
  toggleControls, listControlsWrapper,
  name, id, onSelect, selected, status,
}) => (
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
        type="button"
      >
        <i className="open-list-control-config-icon list-control-icon" />
      </button>
    </div>

    <div className={listControlsWrapper}>
      <div className="list-controls">
        {status === 'open'
          ? (
            <TaskCompleteBtn
              portalTarget={`list-controls-${id}`}
              id={id}
              title="Finish Task."
            />
          ) : null }
        {status === 'complete'
          ? (
            <TasRestoreBtn
              id={id}
              title="Restore Task"
              portalTarget={`list-controls-${id}`}
            />
          )
          : null}
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
  toggleControls: func.isRequired,
  onSelect: func.isRequired,
  name: string.isRequired,

  listControlsWrapper: string.isRequired,
  id: string.isRequired,
  mainClass: string.isRequired,
  listItemWrapperClass: string.isRequired,
  selected: bool.isRequired,
  status: string.isRequired,
};

export default Controls;
