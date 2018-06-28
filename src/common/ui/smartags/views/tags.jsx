import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid-random';
import '../css/smartags.css';
import Tag from './tag';

const inputRef = createRef();

const handleWrapperClick = () => inputRef.current.focus();

const Smartags = ({
  tags, disableInput, input, onKeyInput, onAddOrRemoveTag, isReadOnly, onRemoveTagById, label,
}) => (
  <div
    title="Type anything you want and press enter to add it to the list."
    role="button"
    tabIndex="0"
    className="smartags-wrapper"
    onClick={handleWrapperClick}
    onKeyPress={() => (ev) => {
        if (ev.keyCode === 13) {
          handleWrapperClick();
        }
        return null;
      }}
  >
    <label>{label}</label>
    <div className="smartags-container">
      {tags.map(({ name, id }) => (
        <Tag
          name={name}
          id={id}
          key={id}
          remove={onRemoveTagById}
          isReadOnly={isReadOnly}
        />
        ))}
      <input
        ref={inputRef}
        type="text"
        className={classNames('smartags-input', {
            disabled: disableInput,
          })}
        value={input}
        onChange={onKeyInput}
        onKeyUp={onAddOrRemoveTag}
        disabled={isReadOnly}
      />
    </div>
  </div>);

Smartags.propTypes = {
  onRemoveTagById: PropTypes.func.isRequired,
  onAddOrRemoveTag: PropTypes.func.isRequired,
  onKeyInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  })).isRequired,
  disableInput: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  label: PropTypes.string,
};

Smartags.defaultProps = {
  disableInput: false,
  isReadOnly: false,
};

export default Smartags;
