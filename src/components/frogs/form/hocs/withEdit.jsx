import React, { Component } from 'react';
import Form from '../formDefault';
import './withEdit.css';

export default (function withEdit(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        disableEdit: true,
      };
      this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
      this.setState({
        disableEdit: !this.state.disableEdit,
      });
    }

    render() {
      return (
        <div className="form-withedit-wrapper">
          <div className="withedit-container">
            <button
              className="toggle-edit-btn"
              onClick={this.toggleEdit}
            >
              <i className="edit-label-icon" />
              <span className="edit-label" />
            </button>
          </div>
          <WrappedComponent
            {...this.props}
            isReadOnly={this.state.disableEdit}
          />
          { this.state.disableEdit ?
            <div className="withedit-curtain" /> : null }
        </div>
      );
    }
  };
}(Form));
