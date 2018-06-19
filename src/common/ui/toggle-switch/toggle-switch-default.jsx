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
      animationEnabled: false,
    };
    this.onToggle = this.onToggle.bind(this);
    this.toggleRef = React.createRef();
  }

  // componentDidMount() {
  //   window.setTimeout(() => {
  //     this.toggleRef.current.firstChild.className += ' animation-enabled';
  //   }, 300);
  // }

  onToggle() {
    this.setState({
      active: !this.state.active,
      inActive: !this.state.inActive,
      animationEnabled: true,
    });
  }

  render() {
    return (
      <div className="toggle-switch-default" ref={this.toggleRef}>
        <ToggleSwitch
          {...this.state}
          onToggle={this.onToggle}
        />
      </div>
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
