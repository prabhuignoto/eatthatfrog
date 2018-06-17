import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import LayoutManager from './index';

class LayoutManagerDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layouts: [{
        title: 'List Only',
        id: 'listonly',
        selected: false,
      }, {
        title: 'Show All',
        id: 'showall',
        selected: true,
      }, {
        title: 'Hide Filters',
        id: 'withoutfilters',
        selected: false,
      }],
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange({ target: { value: id } }) {
    this.setState({
      layouts: this.state.layouts.map((x) => {
        if (x.id === id) {
          return Object.assign({}, x, {
            selected: true,
          });
        }
        return Object.assign({}, x, {
          selected: false,
        });
      }),
    }, () => {
      this.props.changeLayout(id);
    });
  }

  render() {
    return (
      <Fragment>
        <LayoutManager layouts={this.state.layouts} onChange={this.onLayoutChange} />
      </Fragment>
    );
  }
}

LayoutManagerDefault.propTypes = {
  changeLayout: PropTypes.func.isRequired,
};

export default LayoutManagerDefault;
