import React from 'react';
import 'bulma/css/bulma.css';
import Form from '../form/formDefault';
import './addfrog.css';


export default (function AddFrog(WrappedComponent) {
  return function addFrogComponent(props) {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-one-third-desktop is-half-desktop add-task-form-container">
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
}(Form));
