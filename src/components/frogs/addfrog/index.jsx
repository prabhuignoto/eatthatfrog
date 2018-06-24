import React from 'react';
import 'bulma/css/bulma.css';
import Form from '../form/index';
import './addfrog.css';


export default (function AddFrog(WrappedComponent) {
  return function addFrogComponent(props) {
    return (
      <div className="container">
        <div className="form-header">
          <i className="form-header-icon" />
          <h4>Create Task</h4>
        </div>
        <div className="columns is-centered">
          <div className="column is-half-desktop is-half-widescreen add-task-form-container">
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
}(Form));
