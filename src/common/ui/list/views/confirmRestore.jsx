import React from 'react';
import PropTypes from 'prop-types';
import '../css/confirmPopDowns.css';

const restoreTask = ({ restore, cancel }) => (
  <div className="conf-content conf-restore">
    <h5>Are you sure you want to restore this task?</h5>
    <div className="conf-button-controls">
      <button className="conf-yes" onClick={restore}>Ok</button>
      <button className="conf-no" onClick={cancel}>Cancel</button>
    </div>
  </div>
);

restoreTask.propTypes = {
  restore: PropTypes.func,
  cancel: PropTypes.func,
};

restoreTask.defaultProps = {
  restore: () => {},
  cancel: () => {},
};
export default restoreTask;
