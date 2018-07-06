import { compose, withStateHandlers, defaultProps } from 'recompose';
import uuid from 'uniqid';
import Smartag from './views/tags';

const initialState = ({ tags = [], input = '', disableInput = false }) => ({
  tags: tags.length > 0 ? tags.map(x => Object.assign(x, {
    id: `smartags${uuid().replace(/-/g, '')}`,
  })) : tags,
  input,
  disableInput,
});

const stateHandlers = {
  onKeyInput: () => ev => ({ input: ev.target.value }),
  onAddOrRemoveTag: ({ tags }, { onTagsEdited }) => (ev) => {
    const { value } = ev.target;
    let result = null;
    if (ev.keyCode === 13 && value) {
      const lTags = tags.concat([{
        name: value,
        id: `smartag${uuid().replace(/-/g, '')}`,
      }]);
      result = {
        input: '',
        tags: lTags,
        disableInput: false,
      };
      onTagsEdited(result.tags);
    } else if (ev.keyCode === 8 && !value) {
      const oldTags = tags;
      const newTags = oldTags.slice(0, oldTags.length - 1);
      result = {
        tags: newTags,
      };
      onTagsEdited(result.tags);
    }
    return result;
  },
  onRemoveTagById: ({ tags }) => id => ({
    input: '',
    tags: tags.filter(x => x.id !== id),
    disableInput: false,
  }),
};

const props = {
  limit: 10,
  isReadOnly: false,
};

export default compose(
  withStateHandlers(initialState, stateHandlers),
  defaultProps(props),
)(Smartag);
