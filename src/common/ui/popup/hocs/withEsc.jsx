import React, { Component, createRef } from 'react';
import Popup from '../index';
import './withEsc.css';

function withEscape(WrappedComponent) {
  return class PopupWithEsc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        close: false,
      };
      this.curtainRef = createRef();
      this.onKeyUp = this.onKeyUp.bind(this);
      this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
      this.curtainRef.current.focus();
    }

    onClose() {
      this.setState({
        close: true,
      });
    }

    onKeyUp(ev) {
      if (ev.keyCode === 27) {
        this.setState({
          close: true,
        });
      }
    }

    render() {
      return (
        <div
          className="popupCurtain"
          ref={this.curtainRef}
          tabIndex="0"
          role="dialog"
          onKeyUp={this.onKeyUp}
        >
          {!this.state.close ?
            <WrappedComponent
              {...this.props}
              close={this.onClose}
            /> : null
          }
        </div>
      );
    }
  };
}

export default withEscape(Popup);
