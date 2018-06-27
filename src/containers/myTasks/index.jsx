import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import MyTasks from '../../components/myTasks/views/myTasks';
import { getAllTasks, updateLayoutType as UpdateLayout } from '../../actions';

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateLayoutType: type => dispatch(UpdateLayout(type)),
});

const mapStateToProps = state => ({ items: state.Task.allTasks });

const defaultLayouts = [{
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

const initialState = ({ layouts = defaultLayouts }) => ({
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getAllTasks();
    },
  }),
  withStateHandlers(initialState, stateHandlers),
)(MyTasks);
