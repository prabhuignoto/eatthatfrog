import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleSwitch from './index';

class ToggleSwitchDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      inActive: props.inActive,
      label: props.label,
      name: props.name,
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      active: !this.state.active,
      inActive: !this.state.inActive,
    });
  }

  render() {
    return (
      <ToggleSwitch
        {...this.state}
        onToggle={this.onToggle}
      />
    );
  }
}

ToggleSwitchDefault.propTypes = {
  active: PropTypes.bool,
  inActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ToggleSwitchDefault.defaultProps = {
  active: false,
  inActive: true,
};

export default ToggleSwitchDefault;
