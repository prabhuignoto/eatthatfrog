import React from 'react';
import { func } from 'prop-types';
import '../css/confirmPopDowns.css';

const removeTask = ({ cancel, remove }) => (
  <div className="conf-content conf-delete">
    <h5>
      {'Are you sure you want to delete this task?'}
    </h5>
    <div className="conf-button-controls">
      <button className="conf-yes" onClick={remove} type="button">Ok</button>
      <button className="conf-no" onClick={cancel} type="button">Cancel</button>
    </div>
  </div>
);

removeTask.propTypes = {
  remove: func,
  cancel: func,
};

removeTask.defaultProps = {
  remove: () => {},
  cancel: () => {},
};
export default removeTask;
