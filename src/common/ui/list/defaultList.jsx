import { compose } from 'recompose';
import ListFactory from './views/listFactory';
import ListItem from './views/listItem';
import ListItemWithControls from './hocs/listWithControls';

export default compose(ListFactory, ListItemWithControls)(ListItem);
