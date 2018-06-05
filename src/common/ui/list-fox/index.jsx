import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid-random';
import Fox from './components/fox';
import './listfox.css';

class ListFox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foxes: props.foxes.map(x => Object.assign(x, {
        id: `listfox${uuid().replace(/-/g, '')}`,
      })) || [],
      input: '',
    };
    this.inputRef = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.handleRemoveFox = this.handleRemoveFox.bind(this);
  }

  handleInput(ev) {
    this.setState({
      input: ev.target.value,
    });
  }

  handleRemoveFox(id) {
    this.setState({
      foxes: this.state.foxes.filter(x => x.id !== id),
    });
  }

  handleKey(ev) {
    if (ev.keyCode === 13) {
      this.setState({
        input: '',
        foxes: this.state.foxes.concat([{
          name: ev.target.value,
          id: `listfox${uuid().replace(/-/g, '')}`,
        }]),
      });
    } else if (ev.keyCode === 8 && !ev.target.value) {
      this.setState({
        foxes: this.state.foxes.slice(0, this.state.foxes.length - 1),
      });
    }
  }

  handleWrapperClick() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className="listfox-wrapper"
        onClick={this.handleWrapperClick}
        onKeyPress={() => (ev) => {
            if (ev.keyCode === 13) {
              this.handleWrapperClick();
            }
            return null;
          }}
      >
        <span className="listfox-label">
          {this.props.label}
        </span>
        <div className="listfox-container">
          <div className="foxes-container">
            {this.state.foxes.map(fox => (
              <Fox
                {...fox} 
                key={fox.id}
                remove={this.handleRemoveFox}
              />
            ))}
            <input
              ref={this.inputRef}
              type="text"
              className="listfox-input"
              value={this.state.input}
              onChange={this.handleInput}
              onKeyUp={this.handleKey}
            />
          </div>
        </div>
      </div>
    );
  }
}

ListFox.propTypes = {
  label: PropTypes.string.isRequired,
  foxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

ListFox.defaultProps = {
  foxes: [],
};

export default ListFox;
