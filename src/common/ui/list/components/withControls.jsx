import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ListItem from './listItem';
import './withControls.css';

export default (function withControls(WrappedComponent) {
  class ListWithControls extends Component {
    constructor(props) {
      super(props);

      this.state = {
        showControls: false,
        animationEnabled: false,
      };
      this.onComplete = this.onComplete.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.toggleControls = this.toggleControls.bind(this);
      this.hideControls = this.hideControls.bind(this);
      this.ref = React.createRef();
    }
    onComplete() {
      // this.props.onComplete(this.props.name);
    }

    onDelete() {
      // this.props.onDelete(this.props.name);
    }

    toggleControls() {
      this.setState({
        showControls: !this.state.showControls,
        animationEnabled: true,
      });
    }

    hideControls() {
      this.setState({
        showControls: false,
      });
    }

    render() {
      const listItemWrapperClass = classNames('list-item-wrapper', {
        'reduce-size': this.state.showControls,
        'original-size': !this.state.showControls,
      });
      const listControlsWrapper = classNames('list-controls-wrapper', {
        show: this.state.showControls,
        hide: !this.state.showControls,
      });
      return (
        <div
          className={classNames('list-with-controls', {
            'animation-enabled': this.state.animationEnabled,
          })}
        >
          <div className={listItemWrapperClass}>
            <WrappedComponent {...this.props} />
            <button
              className="open-list-control-config list-control-btn"
              onClick={this.toggleControls}
            >
              <i className="open-list-control-config-icon list-control-icon" />
            </button>
          </div>

          <div className={listControlsWrapper}>
            <div className="list-controls">
              <button className="mark-as-complete list-control-btn" onClick={this.onComplete}>
                <i className="list-control-icon" />
              </button>
              <button className="list-control-delete list-control-btn" onClick={this.onDelete}>
                <i className="list-control-icon" />
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  ListWithControls.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  return ListWithControls;
}(ListItem));
