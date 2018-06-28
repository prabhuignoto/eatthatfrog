import { compose, withStateHandlers } from 'recompose';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../css/withListAlert.css';
import ListAlert from '../views/listAlert';

export default function withListAlert(BaseComponent) {
  return (Content) => {
    const view = props => (
      <div
        className="component-with-listalert"
        onClick={props.show}
        role="button"
        tabIndex="0"
        onKeyPress={() => ({})}
      >
        <BaseComponent />
        <ListAlert {...props}>
          <Content />
        </ListAlert>
      </div>
    );
    view.propTypes = {
      show: PropTypes.func.isRequired,
      hide: PropTypes.func.isRequired,
    };

    const initialState = ({ visible = false }) => ({
      visible,
    });

    const stateHandlers = {
      show: () => (ev) => {
        const classNames = ['conf-yes', 'conf-no', 'conf-content'];
        const result = _.some(classNames, x => ev.target.classList.contains(x));
        if (!result) {
          return {
            visible: true,
          };
        }
        return null;
      },
      hide: () => () => ({ visible: false }),

    };
    return compose(withStateHandlers(initialState, stateHandlers))(view);
  };
}

