import React from 'react';
import PropTypes from 'prop-types';
import '../css/confirmPopDowns.css';

const deleteTask = ({ ok, cancel }) => (
  <div className="conf-content conf-delete">
    <h5>Are you sure you want to delete this task?</h5>
    <div className="conf-button-controls">
      <button className="conf-yes" onClick={ok}>Ok</button>
      <button className="conf-no" onClick={cancel}>Cancel</button>
    </div>
  </div>
);

deleteTask.propTypes = {
  ok: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default deleteTask;
