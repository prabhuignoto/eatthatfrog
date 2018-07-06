import React from 'react';
import { func } from 'prop-types';
import '../css/confirmPopDowns.css';

const restoreTask = ({ restore, cancel }) => (
  <div className="conf-content conf-restore">
    <h5>Are you sure you want to restore this task?</h5>
    <div className="conf-button-controls">
      <button className="conf-yes" onClick={restore} type="button">Ok</button>
      <button className="conf-no" onClick={cancel} type="button">Cancel</button>
    </div>
  </div>
);

restoreTask.propTypes = {
  restore: func,
  cancel: func,
};

restoreTask.defaultProps = {
  restore: () => {},
  cancel: () => {},
};
export default restoreTask;
