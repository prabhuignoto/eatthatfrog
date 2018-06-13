import React from 'react';
import PropTypes from 'prop-types';
import Fox from './components/fox';
import './dfox.css';

const DropdownFox = props => (
  <div className="dfox-container">
    {props.label.length > 0 ?
      <div className="dfox-label">
        <span className="dfox-label-text">
          {props.label}
        </span>
      </div> : null}
    {props.foxes.map(fox => (
      <Fox
        {...fox}
        key={fox.id}
        toggleSelection={props.toggleSelection}
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
