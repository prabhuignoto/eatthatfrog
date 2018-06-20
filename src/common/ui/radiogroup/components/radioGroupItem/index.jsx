import React from 'react';
import PropTypes from 'prop-types';
import './radioGroupItem.css';

const Fox = ({
  id, name, toggleSelection, foxClass, foxIcon,
}) => {
  // const foxClass = cNames('fox', {
  //   selected,
  // });
  // const foxIcon = cNames('fox-icon', {
  //   selected,
  // });
  const foxId = id;
  const input = `fox-input-${foxId}`;
  return (
    <div className="dfox-wrapper">
      <label
        className={foxClass}
        htmlFor={input}
      >
        <i className={foxIcon} />
        <span>
          {name}
        </span>
      </label>
      <input
        type="checkbox"
        className="fox-html-input"
        onClick={() => toggleSelection(foxId)}
        onKeyUp={(ev) => {
          if (ev.keyCode === 13) {
            return () => toggleSelection(foxId);
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
  toggleSelection: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  foxClass: PropTypes.string.isRequired,
  foxIcon: PropTypes.string.isRequired,
};

export default Fox;
