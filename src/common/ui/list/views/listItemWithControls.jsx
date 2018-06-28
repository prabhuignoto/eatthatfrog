import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem';
import '../css/withControls.css';

const Controls = ({
  mainClass, listItemWrapperClass,
  toggleControls, listControlsWrapper, onComplete,
  onDelete, name, id, onSelect, selected,
}) =>
  (
    <div
      className={mainClass}
    >
      <div className={listItemWrapperClass}>
        <ListItem name={name} id={id} onSelect={onSelect} selected={selected} />
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
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  listControlsWrapper: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  mainClass: PropTypes.string.isRequired,
  listItemWrapperClass: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Controls;
