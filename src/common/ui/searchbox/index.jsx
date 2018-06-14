import React from 'react';
import PropTypes from 'prop-types';
import './searchbox.css';

const SearchBox = props => (
  <div className="searchbox-container">
    <i className="searchbox-icon" />
    <input
      type="text"
      className="searchbox-input"
      placeholder={props.placeholder}
      onInput={(ev) => {
        if (ev.keyCode === 13) {
          props.onComplete();
        } else {
          props.onChange(ev.target.value)
        }
      }}
    />
  </div>
);

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
