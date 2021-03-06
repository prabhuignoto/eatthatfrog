import React from 'react';
import PropTypes from 'prop-types';
import './searchbox.css';

const SearchBox = ({
  placeholder, onComplete, onChange,
}) => (
  <div className="searchbox-container">
    <i className="searchbox-icon" />
    <input
      type="text"
      className="searchbox-input"
      placeholder={placeholder}
      onInput={(ev) => {
        if (ev.keyCode === 13) {
          onComplete();
        } else {
          onChange(ev.target.value);
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
