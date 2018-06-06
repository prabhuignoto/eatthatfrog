import React, { Component } from 'react';
import uuid from 'uuid-random';
import PropTypes from 'prop-types';
import ListFox from './index';

class ListFoxDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foxes: props.foxes.map(x => Object.assign(x, {
        id: `listfox${uuid().replace(/-/g, '')}`,
      })) || [],
      input: '',
    };
    this.onKeyInput = this.onKeyInput.bind(this);
    this.onAddOrRemoveFox = this.onAddOrRemoveFox.bind(this);
    this.onRemoveFoxById = this.onRemoveFoxById.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.foxes.length !== prevState.foxes.length) {
      this.props.onListFoxChanged();
    }
  }

  onKeyInput(ev) {
    this.setState({
      input: ev.target.value,
    });
  }

  onAddOrRemoveFox(ev) {
    if (ev.keyCode === 13) {
      this.setState({
        input: '',
        foxes: this.state.foxes.concat([{
          name: ev.target.value,
          id: `listfox${uuid().replace(/-/g, '')}`,
        }]),
      });
    } else if (ev.keyCode === 8 && !ev.target.value) {
      const oldFoxes = this.state.foxes;
      const newFoxes = oldFoxes.slice(0, oldFoxes.length - 1);
      this.setState({
        foxes: newFoxes,
      });
    }
  }

  onRemoveFoxById(id) {
    this.setState({
      foxes: this.state.foxes.filter(x => x.id !== id),
    });
  }

  render() {
    return (
      <ListFox
        {...this.props}
        foxes={this.state.foxes}
        input={this.state.input}
        onKeyInput={this.onKeyInput}
        onAddOrRemoveFox={this.onAddOrRemoveFox}
        onRemoveFoxById={this.onRemoveFoxById}
      />
    );
  }
}

ListFoxDefault.propTypes = {
  foxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  })).isRequired,
  onListFoxChanged: PropTypes.func,
};

ListFoxDefault.defaultProps = {
  onListFoxChanged: () => {},
};

export default ListFoxDefault;
