import React, { Component } from 'react';
import DropdownFox from '../index';

export default (function withControls(WrappedComponent) {
  return class extends Component {
    selectAll() {
      this.setState({
        foxes: this.state.foxes.map(x => Object.assign({}, x, {
          selected: true,
        })),
      });
    }

    deSelectAll() {
      this.setState({
        foxes: this.state.foxes.map(x => Object.assign({}, x, {
          selected: false,
        })),
      });
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  };
}(DropdownFox));
