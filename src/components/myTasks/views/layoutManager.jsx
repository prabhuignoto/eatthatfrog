import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/layoutmanager.css';

const LayoutManager = ({ layouts, onLayoutChange, selected }) => (
  <div className="layoutmanager-container">
    {layouts.map(x => (
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
            onChange={onLayoutChange}
            selected={selected}
          />
          <i className={`layout-control-icon ${x.id}`} />
        </label>
      </div>))}
  </div>
);

LayoutManager.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  layouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

LayoutManager.defaultProps = {
  layouts: [],
};

export default LayoutManager;
