import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './listfox.css';
import Fox from './components/fox';

const inputRef = createRef();

const handleWrapperClick = () => inputRef.current.focus();

const ListFox = props => (
  <div
    title="Type anything you want and press enter to add it to the list."
    role="button"
    tabIndex="0"
    className="listfox-wrapper"
    onClick={handleWrapperClick}
    onKeyPress={() => (ev) => {
        if (ev.keyCode === 13) {
          handleWrapperClick();
        }
        return null;
      }}
  >
    <div className="listfox-container">
      <div className="foxes-container">
        {props.foxes.map(fox => (
          <Fox
            {...fox}
            key={fox.id}
            remove={props.onRemoveFoxById}
            isReadOnly={props.isReadOnly}
          />
        ))}
        <input
          ref={inputRef}
          type="text"
          className={classNames('listfox-input', {
            disabled: props.disableInput,
          })}
          value={props.input}
          onChange={props.onKeyInput}
          onKeyUp={props.onAddOrRemoveFox}
          disabled={props.isReadOnly}
        />
      </div>
    </div>
  </div>
);

ListFox.propTypes = {
  onRemoveFoxById: PropTypes.func.isRequired,
  onAddOrRemoveFox: PropTypes.func.isRequired,
  onKeyInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  foxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  })).isRequired,
  disableInput: PropTypes.bool,
  isReadOnly: PropTypes.bool,
};

ListFox.defaultProps = {
  disableInput: false,
  isReadOnly: false,
};

export default ListFox;
