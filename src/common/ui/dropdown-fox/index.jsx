import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid-random';
import Fox from './components/fox';
import './dfox.css';

class DropdownFox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foxes: props.foxes.map(x => ({
        name: x.name,
        id: x.id || `fox-${x.name}-${uuid().replace(/-/g, '')}`,
        selected: x.selected || false,
      })),
    };
    this.onToggleSelection = this.onToggleSelection.bind(this);
  }

  onToggleSelection(id) {
    this.setState({
      foxes: this.state.foxes.map((x) => {
        if (x.id === id) {
          return Object.assign({}, x, {
            selected: !x.selected,
          });
        }
        return x;
      }).sort((x, y) => {
        if (x.selected === y.selected) {
          return 0;
        } else if (x.selected) {
          return -1;
        }
        return 1;
      }),
    });
  }

  render() {
    return (
      <div className="dfox-container">
        {this.state.foxes.map(fox => (
          <Fox
            {...fox}
            key={fox.id}
            toggleSelection={this.onToggleSelection}
          />))}
      </div>
    );
  }
}

DropdownFox.propTypes = {
  foxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    selected: PropTypes.bool,
  })),
};

DropdownFox.defaultProps = {
  foxes: [],
};

export default DropdownFox;
