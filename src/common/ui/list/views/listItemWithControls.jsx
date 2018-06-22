import React from 'react';
import PropTypes from 'prop-types';
import Selectable from '../../interactions/selectable/views/selectable';
import ListItem from './listItem';
import '../css/withControls.css';

const Controls = ({
  mainClass, listItemWrapperClass,
  toggleControls, listControlsWrapper, onComplete, onDelete, name, onSelectableChange, on,
}) =>
  (
    <div
      className={mainClass}
    >
      <div className={listItemWrapperClass}>
        <Selectable onChange={onSelectableChange} on={on} name={`selectable-${name}`} />
        <ListItem name={name} />
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
  onSelectableChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  listControlsWrapper: PropTypes.string.isRequired,
  mainClass: PropTypes.string.isRequired,
  listItemWrapperClass: PropTypes.string.isRequired,
  on: PropTypes.bool.isRequired,
};

export default Controls;
