import React from 'react';
import PropTypes from 'prop-types';
import RadioGroupItem from './hocs/radioGroupItem';
import './radioGroup.css';

const DropdownFox = ({ label, foxes, toggleSelection }) => (
  <div className="dfox-container">
    {label.length > 0 ?
      <div className="dfox-label">
        <span className="dfox-label-text">
          {label}
        </span>
      </div> : null}
    {foxes.map(fox => (
      <RadioGroupItem
        {...fox}
        key={fox.id}
        toggleSelection={toggleSelection}
      />))}
  </div>
);

DropdownFox.propTypes = {
  foxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    selected: PropTypes.bool,
  })),
  toggleSelection: PropTypes.func.isRequired,
  label: PropTypes.string,
};

DropdownFox.defaultProps = {
  foxes: [],
  label: '',
};


export default DropdownFox;
