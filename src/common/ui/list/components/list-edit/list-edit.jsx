import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './list-edit.css';

const ListEdit = ({
  selectAllEnabled, deselectAllEnabled, onSelectAll, onDeselectAll,
}) =>
  (
    <div className="list-edit-wrapper">
      <button
        title="Select All"
        className={classNames('lctrl-btn', { enabled: selectAllEnabled })}
        onClick={onSelectAll}
      >
        <i className="lctrl-btn-icon lctrl-btn-icon-selectall" />
      </button>
      <button
        title="Clear All"
        className={classNames('lctrl-btn', { enabled: deselectAllEnabled })}
        onClick={onDeselectAll}
      >
        <i className="lctrl-btn-icon lctrl-btn-icon-deselectall" />
      </button>
    </div >
  );

ListEdit.propTypes = {
  onSelectAll: PropTypes.func.isRequired,
  onDeselectAll: PropTypes.func.isRequired,
  selectAllEnabled: PropTypes.bool.isRequired,
  deselectAllEnabled: PropTypes.bool.isRequired,
};

export default ListEdit;
