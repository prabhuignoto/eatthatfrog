import React, { Component } from 'react';
import Form from '../formDefault';

export default (function withEdit(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allowEdit: false,
      };
      this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
      this.setState({
        enableEdit: !this.state.enableEdit,
      });
    }

    render() {
      return (
        <div className="form-withedit-wrapper">
          <div className="withedit-container">
            <button
              className="toggle-edit"
              onClick={this.toggleEdit}
            >Edit
            </button>
          </div>
          <WrappedComponent
            {...this.props}
            // isReadOnly={this.state.enableEdit}
            isReadOnly
          />
        </div>
      );
    }
  };
}(Form));
