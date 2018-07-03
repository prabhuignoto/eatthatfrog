import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../css/withListAlert.css';
import ListAlert from '../views/listAlert';
import { deleteTask as DeleteTask, finishTask as FinishTask, restoreTask as RestoreTask } from '../../../../../../actions';


export default function withListAlert(BaseComponent) {
  return (Content) => {
    const view = props => (
      <div
        className="component-with-listalert"
        onClick={props.show}
        role="button"
        tabIndex="0"
        title={props.title}
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
      title: PropTypes.string,
    };

    view.defaultProps = {
      title: '',
    };

    const mapDispatchToProps = dispatch => ({
      deleteTask: id => dispatch(DeleteTask(id)),
      finishTask: id => dispatch(FinishTask(id)),
      restoreTask: id => dispatch(RestoreTask(id)),
    });

    const initialState = ({ visible = false, id = null }) => ({
      visible,
      id,
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
      removeTask: (state, { deleteTask, id }) => () => {
        deleteTask(id);
        return {
          visible: false,
        };
      },
      completeTask: (state, { finishTask, id }) => () => {
        finishTask(id);
        return {
          visible: false,
        };
      },
      restoreTask: (state, { restoreTask, id }) => () => {
        restoreTask(id);
        return {
          visible: false,
        };
      },
    };
    return compose(
      connect(null, mapDispatchToProps),
      withStateHandlers(initialState, stateHandlers),
    )(view);
  };
}

