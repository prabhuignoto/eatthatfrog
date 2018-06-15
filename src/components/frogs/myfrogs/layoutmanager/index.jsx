import React from 'react';
import PropTypes from 'prop-types';
import './layoutmanager.css';

const LayoutManager = props => (
  <div className="layoutmanager-container">
    <div className="layout-control">
      <label htmlFor="list-only" className="layout-control-label" title="Show List Only">
        <input
          type="radio"
          name="layout-control"
          className="layout-control-input"
          id="list-only"
          value="listonly"
          onChange={props.changeLayout}
        />
        <i className="layout-control-icon list-only" />
      </label>
    </div>
    <div className="layout-control">
      <label htmlFor="without-filters" className="layout-control-label" title="Hide Filters">
        <input
          type="radio"
          name="layout-control"
          className="layout-control-input"
          id="without-filters"
          value="withoutfilters"
          onChange={props.changeLayout}
        />
        <i className="layout-control-icon without-filters" />
      </label>
    </div>
    <div className="layout-control">
      <label htmlFor="show-all" className="layout-control-label" title="Show All">
        <input
          type="radio"
          name="layout-control"
          className="layout-control-input"
          id="show-all"
          value="showall"
          onChange={props.changeLayout}
        />
        <i className="layout-control-icon show-all" />
      </label>
    </div>
  </div>
);

LayoutManager.propTypes = {
  changeLayout: PropTypes.func.isRequired,
};

export default LayoutManager;
