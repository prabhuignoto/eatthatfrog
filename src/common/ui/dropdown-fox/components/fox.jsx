import React from 'react';
import PropTypes from 'prop-types';
import cNames from 'classnames';
import './fox.css';

const Fox = (props) => {
  const { selected } = props;
  const foxClass = cNames('fox', {
    selected,
  });
  const foxIcon = cNames('fox-icon', {
    selected,
  });
  const foxId = props.id;
  const input = `fox-input${foxId}`;
  return (
    <div className="fox-wrapper">
      <label
        className={foxClass}
        htmlFor={input}
      >
        <i className={foxIcon} />
        <span>
          {props.name}
        </span>
      </label>
      <input
        type="checkbox"
        className="fox-html-input"
        onClick={() => props.toggleSelection(foxId)}
        onKeyUp={(ev) => {
          if (ev.keyCode === 13) {
            return () => props.toggleSelection(foxId);
          }
          return null;
        }}
        id={input}
      />
    </div>
  );
};

Fox.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  toggleSelection: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Fox;
