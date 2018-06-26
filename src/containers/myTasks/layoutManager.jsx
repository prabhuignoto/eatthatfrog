import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Layout from '../../components/myTasks/views/layoutManager';
import UpdateLayoutType from '../../actions';

const dLayouts = [{
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
}];

const initialState = ({ layouts = dLayouts }) => ({
  layouts,
});

const stateHandlers = {
  onLayoutChange: ({ layouts }, { updateLayoutType }) => ({ target: { value: layoutType } }) => {
    updateLayoutType(layoutType);
    return {
      layouts: layouts.map((x) => {
        if (x.id === layoutType) {
          return Object.assign({}, x, {
            selected: true,
          });
        }
        return Object.assign({}, x, {
          selected: false,
        });
      }),
    };
  },
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  updateLayoutType: type => dispatch(UpdateLayoutType(type)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
)(Layout);
