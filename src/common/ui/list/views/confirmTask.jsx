import React from 'react';
import { func } from 'prop-types';
import '../css/confirmPopDowns.css';

const finishTask = ({ complete, cancel }) => (
  <div className="conf-content conf-task">
    <h5>Are you sure you want to finish this task?</h5>
    <div className="conf-button-controls">
      <button className="conf-yes" onClick={complete} type="button">Ok</button>
      <button className="conf-no" onClick={cancel} type="button">Cancel</button>
    </div>
  </div>
);

finishTask.propTypes = {
  complete: func,
  cancel: func,
};

finishTask.defaultProps = {
  complete: () => {},
  cancel: () => {},
};

export default finishTask;
