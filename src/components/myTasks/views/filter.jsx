import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import { ToggleSwitchSimple as ToggleSwitch } from '../../imports';
import '../css/filter.css';

const filter = ({
  onFilterToday, onFilterOlder, filterToday, filterOlder,
  filterOpen, filterCompleted, onFilterOpen, onFilterCompleted, closeFilters, show,
}) => (show ?
  <Fragment>
    <div className="filters-overlay">
      <div className="container filters-main">
        <div className="filters-container columns">
          <div className="filters-wrapper column is-half-desktop">
            <div className="filters">
              <h2>Time</h2>
              <div className="filters-grp-container">
                <ToggleSwitch
                  name="days-filter-today"
                  label="Todays"
                  onToggle={onFilterToday}
                  active={filterToday}
                />
                <ToggleSwitch
                  name="days-filter-older"
                  label="Older"
                  onToggle={onFilterOlder}
                  active={filterOlder}
                />
              </div>
            </div>
            <br />
            <div className="filters">
              <h2>Status</h2>
              <div className="filters-grp-container">
                <ToggleSwitch
                  name="status-filter-open"
                  label="Open"
                  onToggle={onFilterOpen}
                  active={filterOpen}
                />
                <ToggleSwitch
                  name="status-filter-completed"
                  label="Completed"
                  onToggle={onFilterCompleted}
                  active={filterCompleted}
                />
              </div>
            </div>
          </div>
          <div className="filters-wrapper column is-half-desktop">
            <div className="filters filter-tags"></div>
          </div>
        </div>
        <button className="close-filters" onClick={closeFilters} />
      </div>
    </div>
  </Fragment> : null
);

filter.propTypes = {
  onFilterOlder: PropTypes.func.isRequired,
  onFilterToday: PropTypes.func.isRequired,
  filterToday: PropTypes.bool.isRequired,
  filterOlder: PropTypes.bool.isRequired,
  onFilterOpen: PropTypes.func.isRequired,
  onFilterCompleted: PropTypes.func.isRequired,
  filterOpen: PropTypes.bool.isRequired,
  filterCompleted: PropTypes.bool.isRequired,
  closeFilters: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default filter;
