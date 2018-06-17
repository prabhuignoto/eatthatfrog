import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './layoutmanager.css';

const LayoutManager = props => (
  <div className="layoutmanager-container">
    {props.layouts.map(x => (
      <div className="layout-control" key={x.id}>
        <label
          htmlFor={x.id}
          className={classNames('layout-control-label', {
            selected: x.selected,
          })}
          title={x.title}
        >
          <input
            type="radio"
            name="layout-control"
            className="layout-control-input"
            id={x.id}
            value={x.id}
            onChange={props.onChange}
            selected={props.selected}
          />
          <i className={`layout-control-icon ${x.id}`} />
        </label>
      </div>))}
  </div>
);

LayoutManager.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  layouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default LayoutManager;
