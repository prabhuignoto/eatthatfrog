import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import { ToggleSwitchSimple as ToggleSwitch } from '../../imports';
import '../css/filter.css';

const ListItem = ({ onChecked, selected, label }) => (
  <li
    className={classNames('filters-list-item', {
      selected,
    })}
    onClick={onChecked}
    tabIndex="0"
    onKeyUp={(ev) => {
      if (ev.which === 13) {
        onChecked();
      }
    }}
  ><i className="filters-list-item-icon" /><span className="filters-list-item-label">{label}</span>
  </li>);

ListItem.propTypes = {
  onChecked: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};


const filter = ({
  closeFilters, show, onTodayChecked, onOlderChecked, onOpenChecked, onCompletedChecked,
  todayEnabled, olderEnabled, openEnabled, completedEnabled,
}) => (
  show
    ? (
      <Fragment>
        <div className="filters-container">
          <div className="filters">
            <h2>Time</h2>
            <ul className="filters-list">
              <ListItem label="Today" onChecked={onTodayChecked} selected={todayEnabled} />
              <ListItem label="Older" onChecked={onOlderChecked} selected={olderEnabled} />
            </ul>
          </div>
          <div className="filters">
            <h2>Status</h2>
            <ul className="filters-list">
              <ListItem label="Open" onChecked={onOpenChecked} selected={openEnabled} />
              <ListItem
                label="Completed"
                onChecked={onCompletedChecked}
                selected={completedEnabled}
              />
            </ul>
          </div>
          <button className="close-filters" onClick={closeFilters} type="button"/>
        </div>
      </Fragment>
    ) : null
);

filter.propTypes = {
  onTodayChecked: PropTypes.func.isRequired,
  onOlderChecked: PropTypes.func.isRequired,
  onOpenChecked: PropTypes.func.isRequired,
  onCompletedChecked: PropTypes.func.isRequired,

  todayEnabled: PropTypes.bool.isRequired,
  olderEnabled: PropTypes.bool.isRequired,
  openEnabled: PropTypes.bool.isRequired, 
  completedEnabled: PropTypes.bool.isRequired,

  closeFilters: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default filter;
